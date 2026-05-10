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
          <div className="bg-[#286EF1] px-4 pb-4 h-36 flex items-end">
            <div className="flex items-end justify-between w-full">
              <div className="flex items-end gap-3 flex-1">
                <button onClick={onBack} className="p-1 -ml-1 active:opacity-70 mb-0.5">
                  <ArrowLeft size={24} className="text-white" />
                </button>
                <div>
                  <h1 className="text-white text-sm font-semibold">Cardápio</h1>
                  <p className="text-white/90 text-xs">Conta: Particular</p>
                </div>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#286EF1] text-xs font-bold">NL</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">

            {/* Card with Illustration */}
            <div className="bg-white rounded-xl p-5 overflow-hidden">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                    Refeições especialmente para você.
                  </h2>
                  <p className="text-sm text-gray-600">
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
                    <Sun className="w-6 h-6 text-gray-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-900 mb-0.5">
                      Almoço de amanhã
                    </h3>
                    <p className="text-sm text-gray-500">
                      À partir das 12h
                    </p>
                  </div>
                  <ChevronRight size={20} className="text-[#286EF1] flex-shrink-0" />
                </div>
              </div>

              <div onClick={onSelectMeal} className="bg-white border border-gray-200 rounded-xl p-4 active:bg-gray-50 transition cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Moon className="w-6 h-6 text-gray-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-900 mb-0.5">
                      Jantar de amanhã
                    </h3>
                    <p className="text-sm text-gray-500">
                      À partir das 18h
                    </p>
                  </div>
                  <ChevronRight size={20} className="text-[#286EF1] flex-shrink-0" />
                </div>
              </div>
            </div>

            {/* Info Text */}
            <div className="px-1">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Lembre-se:</span> as alterações nas refeições só podem ser feitas das 6h às 14h, com 01 dia de antecedência.
              </p>
            </div>

            {/* Help Card */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <div className="flex flex-col gap-2">
                <div className="w-5 h-5">
                  <Headphones className="w-5 h-5 text-gray-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">
                    Precisando de ajuda?
                  </p>
                  <p className="text-xs text-gray-700 leading-relaxed">
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
