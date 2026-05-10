import { ArrowLeft, ChevronRight, Info } from 'lucide-react';
import { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import CardapioImage from './CardapioImage';
import MealDetails from './menu/MealDetails';
import SpecialMeals from './menu/SpecialMeals';
import MenuSelection from './menu/MenuSelection';
import ConfirmChanges from './menu/ConfirmChanges';
import SuccessScreen from './menu/SuccessScreen';

type MenuView = 'home' | 'meal-details' | 'special-meals' | 'menu-selection' | 'confirm-changes' | 'success';

export default function MenuScreen() {
  const [selectedTab, setSelectedTab] = useState<'today' | 'tomorrow'>('tomorrow');
  const [currentView, setCurrentView] = useState<MenuView>('home');

  if (currentView === 'meal-details') {
    return (
      <MealDetails
        onBack={() => setCurrentView('home')}
        onEditMeal={() => setCurrentView('menu-selection')}
      />
    );
  }

  if (currentView === 'special-meals') {
    return (
      <SpecialMeals
        onBack={() => setCurrentView('home')}
        onSelectMeal={() => setCurrentView('meal-details')}
      />
    );
  }

  if (currentView === 'menu-selection') {
    return (
      <MenuSelection
        onBack={() => setCurrentView('meal-details')}
        onConfirm={() => setCurrentView('confirm-changes')}
      />
    );
  }

  if (currentView === 'confirm-changes') {
    return (
      <ConfirmChanges
        onBack={() => setCurrentView('menu-selection')}
        onConfirm={() => setCurrentView('success')}
        onCancel={() => setCurrentView('menu-selection')}
      />
    );
  }

  if (currentView === 'success') {
    return (
      <SuccessScreen
        onBack={() => setCurrentView('home')}
        onGoToMenu={() => setCurrentView('home')}
        onViewDetails={() => setCurrentView('meal-details')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[375px] bg-white rounded-3xl shadow-xl overflow-hidden min-h-[812px]">
        {/* Mobile Container */}
        <div className="flex flex-col h-full">

          {/* Header */}
          <div className="bg-[#286EF1] px-4 pb-4 h-36 flex items-end">
            <div className="flex items-end justify-between w-full">
              <div className="flex items-end gap-3 flex-1">
                <button className="p-1 -ml-1 active:opacity-70 mb-0.5">
                  <ArrowLeft size={24} className="text-white" />
                </button>
                <div>
                  <h1 className="text-white text-sm font-semibold">Cardápio</h1>
                  <p className="text-white/90 text-xs">Conta Particular</p>
                </div>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#286EF1] text-xs font-bold">BT</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">

            {/* Title with Illustration */}
            <div
              onClick={() => setCurrentView('special-meals')}
              className="flex items-center justify-between gap-4 py-2"
            >
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900 mb-1.5">
                  Acesse seu cardápio
                </h2>
                <p className="text-xs text-gray-600">
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
                  className="pb-2.5 text-sm font-medium text-gray-600 border-b-2 border-transparent data-[state=active]:border-[#286EF1] data-[state=active]:text-[#286EF1] transition -mb-[2px]"
                >
                  Para hoje
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="tomorrow"
                  className="pb-2.5 text-sm font-medium text-gray-600 border-b-2 border-transparent data-[state=active]:border-[#286EF1] data-[state=active]:text-[#286EF1] transition -mb-[2px]"
                >
                  Para amanhã
                </Tabs.Trigger>
              </Tabs.List>
            </Tabs.Root>

            {/* Menu Items */}
            <div className="space-y-3">
              <div className="bg-white border border-gray-200 rounded-xl p-4 active:bg-gray-50 transition cursor-pointer">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">
                      Iscas de Mignon ao Molho
                    </h3>
                    <p className="text-xs text-gray-500">
                      Personalize novamente o almoço
                    </p>
                  </div>
                  <ChevronRight size={18} className="text-[#286EF1] flex-shrink-0" />
                </div>
              </div>

              <div
                onClick={() => setCurrentView('meal-details')}
                className="bg-white border border-gray-200 rounded-xl p-4 active:bg-gray-50 transition cursor-pointer"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">
                      Filé de Tilápia Grelhado
                    </h3>
                    <p className="text-xs text-gray-500">
                      Personalize novamente o jantar
                    </p>
                  </div>
                  <ChevronRight size={18} className="text-[#286EF1] flex-shrink-0" />
                </div>
              </div>
            </div>

            {/* Info Alert */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <div className="flex flex-col gap-2">
                <div className="w-5 h-5">
                  <Info size={20} className="text-gray-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">
                    Altere seu cardápio até às 14h.
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
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
