import { ArrowLeft, ChevronRight, Sun, Moon, Headphones } from 'lucide-react';
import CardapioImage from '../CardapioImage';

interface SpecialMealsProps {
  onBack: () => void;
  onSelectMeal: () => void;
}

export default function SpecialMeals({ onBack, onSelectMeal }: SpecialMealsProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[375px] bg-white rounded-3xl shadow-xl overflow-hidden min-h-[812px]">
        <div className="flex flex-col h-full">

          {/* Header */}
          <div className="bg-[var(--hsl-menu-color-brand)] px-4 pb-4 h-36 flex items-end">
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
          <div className="flex-1 overflow-y-auto p-4 space-y-4">

            {/* Card with Illustration */}
            <div className="bg-white rounded-xl p-5 overflow-hidden">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="menu-title-lg mb-2">
                    Refeições especialmente para você.
                  </h2>
                  <p className="menu-body">
                    Conheça o cardápio de amanhã.
                  </p>
                </div>
                <div className="w-24 h-24 flex-shrink-0">
                  <CardapioImage />
                </div>
              </div>
            </div>

            {/* Meal Options */}
            <div className="space-y-3">
              <div className="bg-white border border-gray-200 rounded-xl p-4 active:bg-gray-50 transition cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sun className="w-6 h-6 menu-icon" />
                  </div>
                  <div className="flex-1">
                    <h3 className="menu-section-title mb-0.5">
                      Almoço de amanhã
                    </h3>
                    <p className="menu-muted">
                      À partir das 12h
                    </p>
                  </div>
                  <ChevronRight size={20} className="menu-brand flex-shrink-0" />
                </div>
              </div>

              <div onClick={onSelectMeal} className="bg-white border border-gray-200 rounded-xl p-4 active:bg-gray-50 transition cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Moon className="w-6 h-6 menu-icon" />
                  </div>
                  <div className="flex-1">
                    <h3 className="menu-section-title mb-0.5">
                      Jantar de amanhã
                    </h3>
                    <p className="menu-muted">
                      À partir das 18h
                    </p>
                  </div>
                  <ChevronRight size={20} className="menu-brand flex-shrink-0" />
                </div>
              </div>
            </div>

            {/* Info Text */}
            <div className="px-1">
              <p className="menu-body">
                <span className="menu-body-strong">Lembre-se:</span> as alterações nas refeições só podem ser feitas das 6h às 14h, com 01 dia de antecedência.
              </p>
            </div>

            {/* Help Card */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
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
