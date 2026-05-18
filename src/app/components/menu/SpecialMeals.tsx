import { ArrowLeft, BellRing, ChevronRight, ConciergeBell, Headphones, Moon } from 'lucide-react';
import CardapioImage from '../CardapioImage';

interface SpecialMealsProps {
  onBack: () => void;
  onSelectMeal: () => void;
  transitionDirection?: 'forward' | 'back';
}

export default function SpecialMeals({ onBack, onSelectMeal, transitionDirection = 'forward' }: SpecialMealsProps) {
  return (
    <div className="menu-canvas hsl-modern">
      <div className="menu-mobile-frame overflow-hidden">
        <div className="flex flex-col h-full">

          {/* Header */}
          <div className="bg-[#1749a6] px-4 pb-4 h-[120px] flex items-end">
            <div className="flex items-end justify-between w-full">
              <div className="flex items-end gap-3 flex-1">
                <button onClick={onBack} className="p-1 -ml-1 active:opacity-70 mb-0.5">
                  <ArrowLeft size={24} className="menu-header-icon" />
                </button>
                <div>
                  <h1 className="menu-header-title">Cardápio</h1>
                  <p className="menu-header-caption">Conta: Particular</p>
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
            <div className="flex items-start justify-between gap-4 py-2">
              <div className="flex-1">
                <h2 className="menu-title-lg mb-2">
                  Refeições especialmente para você.
                </h2>
                <p className="menu-body">
                  Conheça o cardápio de amanhã.
                </p>
              </div>
              <div className="w-32 h-32 flex-shrink-0">
                <CardapioImage />
              </div>
            </div>

            {/* Meal Options */}
            <div className="space-y-3">
              <div className="menu-action-card">
                <div className="menu-action-card-row">
                  <div className="menu-action-icon">
                    <div className="relative w-6 h-6">
                      <BellRing className="absolute left-1 top-0 w-3 h-3 menu-icon" />
                      <ConciergeBell className="absolute left-0 bottom-0 w-6 h-6 menu-icon" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="menu-action-title">
                      Almoço de amanhã
                    </h3>
                    <p className="menu-action-subtitle">
                      À partir das 12h
                    </p>
                  </div>
                  <ChevronRight size={18} className="menu-brand flex-shrink-0" />
                </div>
              </div>

              <div onClick={onSelectMeal} className="menu-action-card">
                <div className="menu-action-card-row">
                  <div className="menu-action-icon">
                    <div className="relative w-6 h-6">
                      <Moon className="absolute left-0 top-0 w-3.5 h-3.5 menu-icon" />
                      <ConciergeBell className="absolute left-0 bottom-0 w-6 h-6 menu-icon" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="menu-action-title">
                      Jantar de amanhã
                    </h3>
                    <p className="menu-action-subtitle">
                      À partir das 18h
                    </p>
                  </div>
                  <ChevronRight size={18} className="menu-brand flex-shrink-0" />
                </div>
              </div>
            </div>

            {/* Info Text */}
            <div>
              <p className="menu-body">
                <span className="menu-body-strong">Lembre-se:</span> as alterações nas refeições só podem ser feitas das 6h às 14h, com 01 dia de antecedência.
              </p>
            </div>

            {/* Help Card */}
            <div className="menu-info-card">
              <div className="flex flex-col gap-2">
                <div className="w-5 h-5">
                  <Headphones className="w-5 h-5 menu-muted-icon" />
                </div>
                <div>
                  <p className="menu-item-title mb-1">
                    Precisando de ajuda?
                  </p>
                  <p className="menu-caption">
                    Entre em contato com o Concierge ou o Serviço de Copa do hospital e tire suas dúvidas.
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
