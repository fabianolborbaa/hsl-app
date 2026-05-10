import { ArrowLeft, BellRing, ChevronRight, ConciergeBell, Headphones, Moon } from 'lucide-react';
import CardapioImage from '../CardapioImage';

interface SpecialMealsProps {
  onBack: () => void;
  onSelectMeal: () => void;
}

export default function SpecialMeals({ onBack, onSelectMeal }: SpecialMealsProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="menu-mobile-frame bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="flex flex-col h-full">

          {/* Header */}
          <div className="bg-[var(--hsl-menu-color-brand)] px-7 pb-9 h-[172px] flex items-end">
            <div className="flex items-end justify-between w-full">
              <div className="flex items-end gap-6 flex-1">
                <button onClick={onBack} className="p-1 -ml-1 active:opacity-70 mb-0.5">
                  <ArrowLeft size={28} className="menu-header-icon" />
                </button>
                <div>
                  <h1 className="menu-header-title">Cardápio</h1>
                  <p className="menu-header-caption">Conta: Particular</p>
                </div>
              </div>
              <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="menu-header-avatar-text">NL</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-7 pt-8 pb-6 space-y-7">

            {/* Title with Illustration */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h2 className="menu-title-lg mb-4">
                  Refeições especialmente para você.
                </h2>
                <p className="menu-body">
                  Conheça o cardápio de amanhã.
                </p>
              </div>
              <div className="w-32 h-32 flex-shrink-0 mt-1">
                <CardapioImage />
              </div>
            </div>

            {/* Meal Options */}
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5 active:bg-gray-50 transition cursor-pointer">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="relative w-7 h-7">
                      <BellRing className="absolute left-1 top-0 w-3.5 h-3.5 menu-icon" />
                      <ConciergeBell className="absolute left-0 bottom-0 w-7 h-7 menu-icon" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="menu-section-title mb-0.5">
                      Almoço de amanhã
                    </h3>
                    <p className="menu-muted">
                      À partir das 12h
                    </p>
                  </div>
                  <ChevronRight size={32} strokeWidth={2} className="menu-brand flex-shrink-0" />
                </div>
              </div>

              <div onClick={onSelectMeal} className="bg-white border border-gray-200 rounded-lg p-5 active:bg-gray-50 transition cursor-pointer">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="relative w-7 h-7">
                      <Moon className="absolute left-0 top-0 w-4 h-4 menu-icon" />
                      <ConciergeBell className="absolute left-0 bottom-0 w-7 h-7 menu-icon" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="menu-section-title mb-0.5">
                      Jantar de amanhã
                    </h3>
                    <p className="menu-muted">
                      À partir das 18h
                    </p>
                  </div>
                  <ChevronRight size={32} strokeWidth={2} className="menu-brand flex-shrink-0" />
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
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex flex-col gap-5">
                <div className="w-6 h-6">
                  <Headphones className="w-6 h-6 menu-muted-icon" />
                </div>
                <div>
                  <p className="menu-item-title mb-4">
                    Precisando de ajuda?
                  </p>
                  <p className="menu-body">
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
