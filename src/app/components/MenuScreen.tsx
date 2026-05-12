import { ArrowLeft, ChevronRight, Info } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import CardapioImage from './CardapioImage';
import MealDetails from './menu/MealDetails';
import SpecialMeals from './menu/SpecialMeals';
import MenuSelection from './menu/MenuSelection';
import ConfirmChanges from './menu/ConfirmChanges';
import SuccessScreen from './menu/SuccessScreen';

type MenuView = 'home' | 'meal-details' | 'special-meals' | 'menu-selection' | 'confirm-changes' | 'success';
type TransitionDirection = 'forward' | 'back';

export default function MenuScreen() {
  const [selectedTab, setSelectedTab] = useState<'today' | 'tomorrow'>('tomorrow');
  const [currentView, setCurrentView] = useState<MenuView>('home');
  const [specialMealsMode, setSpecialMealsMode] = useState<'browse' | 'edit'>('browse');
  const [transitionDirection, setTransitionDirection] = useState<TransitionDirection>('forward');

  const goTo = (view: MenuView, direction: TransitionDirection = 'forward') => {
    setTransitionDirection(direction);
    setCurrentView(view);
  };

  // Auto-play demo loop when ?demo=1 in URL
  const demoRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    const isDemo = new URLSearchParams(window.location.search).get('demo') === '1';
    if (!isDemo) return;

    type Step = { view: MenuView; dir: TransitionDirection; mode?: 'browse' | 'edit'; hold: number };
    const steps: Step[] = [
      { view: 'home',            dir: 'forward', hold: 2800 },
      { view: 'meal-details',    dir: 'forward', hold: 2800 },
      { view: 'special-meals',   dir: 'forward', mode: 'edit', hold: 2200 },
      { view: 'menu-selection',  dir: 'forward', hold: 3000 },
      { view: 'confirm-changes', dir: 'forward', hold: 2200 },
      { view: 'success',         dir: 'forward', hold: 3000 },
    ];

    let idx = 0;

    function tick() {
      const next = steps[(idx + 1) % steps.length];
      idx = (idx + 1) % steps.length;
      if (next.mode) setSpecialMealsMode(next.mode);
      setTransitionDirection(next.dir);
      setCurrentView(next.view);
      demoRef.current = setTimeout(tick, next.hold);
    }

    demoRef.current = setTimeout(tick, steps[0].hold);
    return () => { if (demoRef.current) clearTimeout(demoRef.current); };
  }, []);

  if (currentView === 'meal-details') {
    return (
      <MealDetails
        transitionDirection={transitionDirection}
        onBack={() => goTo('home', 'back')}
        onEditMeal={() => {
          setSpecialMealsMode('edit');
          goTo('special-meals', 'forward');
        }}
      />
    );
  }

  if (currentView === 'special-meals') {
    return (
      <SpecialMeals
        transitionDirection={transitionDirection}
        onBack={() => goTo(specialMealsMode === 'edit' ? 'meal-details' : 'home', 'back')}
        onSelectMeal={() => goTo(specialMealsMode === 'edit' ? 'menu-selection' : 'meal-details', 'forward')}
      />
    );
  }

  if (currentView === 'menu-selection') {
    return (
      <MenuSelection
        transitionDirection={transitionDirection}
        onBack={() => goTo('meal-details', 'back')}
        onConfirm={() => goTo('confirm-changes', 'forward')}
      />
    );
  }

  if (currentView === 'confirm-changes') {
    return (
      <MenuSelection
        transitionDirection={transitionDirection}
        onBack={() => goTo('meal-details', 'back')}
        onConfirm={() => goTo('confirm-changes', 'forward')}
        overlay={
          <ConfirmChanges
            onConfirm={() => goTo('success', 'forward')}
            onCancel={() => goTo('menu-selection', 'back')}
          />
        }
      />
    );
  }

  if (currentView === 'success') {
    return (
      <SuccessScreen
        transitionDirection={transitionDirection}
        onBack={() => goTo('home', 'back')}
        onGoToMenu={() => goTo('home', 'back')}
        onViewDetails={() => goTo('meal-details', 'forward')}
      />
    );
  }

  return (
    <div className="menu-canvas">
        <div className="menu-mobile-frame bg-white overflow-hidden">
          {/* Mobile Container */}
          <div className="flex flex-col h-full">

            {/* Header */}
            <div className="bg-[#1749a6] px-4 pb-4 h-[120px] flex items-end">
              <div className="flex items-end justify-between w-full">
                <div className="flex items-end gap-3 flex-1">
                  <button className="p-1 -ml-1 active:opacity-70 mb-0.5">
                    <ArrowLeft size={24} className="menu-header-icon" />
                  </button>
                  <div>
                    <h1 className="menu-header-title">Cardápio</h1>
                    <p className="menu-header-caption">Conta Particular</p>
                  </div>
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="menu-avatar-text">NL</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={`menu-content-transition menu-content-${transitionDirection} flex-1 overflow-y-auto p-4 space-y-4`}>

              {/* Title with Illustration */}
              <div
                onClick={() => {
                  setSpecialMealsMode('browse');
                  goTo('special-meals', 'forward');
                }}
                className="flex items-center justify-between gap-4 py-2"
              >
                <div className="flex-1">
                  <h2 className="menu-title mb-1.5">
                    Acesse seu cardápio
                  </h2>
                  <p className="menu-caption">
                    Explore e personalize suas refeições.
                  </p>
                </div>
                <div className="w-32 h-32 flex-shrink-0">
                  <CardapioImage />
                </div>
              </div>

              {/* Tabs */}
              <Tabs.Root value={selectedTab} onValueChange={setSelectedTab}>
                <Tabs.List className="flex gap-8 border-b border-gray-300">
                  <Tabs.Trigger
                    value="today"
                    className="pb-2.5 menu-tab border-b-2 border-transparent transition -mb-[2px]"
                  >
                    Para hoje
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="tomorrow"
                    className="pb-2.5 menu-tab border-b-2 border-transparent transition -mb-[2px]"
                  >
                    Para amanhã
                  </Tabs.Trigger>
                </Tabs.List>
              </Tabs.Root>

              {/* Menu Items */}
              <div className="space-y-3">
                <div className="menu-action-card">
                  <div className="menu-action-card-row">
                    <div className="flex-1">
                      <h3 className="menu-action-title">
                        Iscas de Mignon ao Molho
                      </h3>
                      <p className="menu-action-subtitle">
                        Personalize novamente o almoço
                      </p>
                    </div>
                    <ChevronRight size={18} className="menu-brand flex-shrink-0" />
                  </div>
                </div>

                <div
                  onClick={() => goTo('meal-details', 'forward')}
                  className="menu-action-card"
                >
                  <div className="menu-action-card-row">
                    <div className="flex-1">
                      <h3 className="menu-action-title">
                        Filé de Tilápia Grelhado
                      </h3>
                      <p className="menu-action-subtitle">
                        Personalize novamente o jantar
                      </p>
                    </div>
                    <ChevronRight size={18} className="menu-brand flex-shrink-0" />
                  </div>
                </div>
              </div>

              {/* Info Alert */}
              <div className="menu-info-card">
                <div className="flex flex-col gap-2">
                  <div className="w-5 h-5">
                    <Info size={20} className="menu-muted-icon" />
                  </div>
                  <div>
                    <p className="menu-item-title mb-1">
                      Altere seu cardápio até às 14h.
                    </p>
                    <p className="menu-caption">
                      Refeições podem ser personalizadas hoje e das 6 às 14h
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    </div>
  );
}
