import { ArrowLeft, Coffee, Salad, UtensilsCrossed, IceCream, Plus, Info } from 'lucide-react';

interface MealDetailsProps {
  onBack: () => void;
  onEditMeal: () => void;
}

export default function MealDetails({ onBack, onEditMeal }: MealDetailsProps) {
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
                  <h1 className="text-white text-sm font-semibold">Jantar de amanhã</h1>
                  <p className="text-white/90 text-xs">Conta: Particular</p>
                </div>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#286EF1] text-xs font-bold">BT</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">

            {/* Meal Title */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Filé de Tilápia Grelhado
              </h2>
              <p className="text-sm text-gray-500">Acompanhamentos</p>
            </div>

            {/* Items List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Coffee className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Sopa</p>
                  <p className="text-sm text-gray-600">Creme de palmito sem sal</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Salad className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Salada</p>
                  <p className="text-sm text-gray-600">Salada e alface roxo com tomate</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <UtensilsCrossed className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Guarnição</p>
                  <p className="text-sm text-gray-600">Arroz integral com sal, Quiche de alho poró com sal</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <IceCream className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Sobremesa</p>
                  <p className="text-sm text-gray-600">Salada de frutas</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Plus className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Opcionais</p>
                  <p className="text-sm text-gray-600">Limão no peixe</p>
                </div>
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <div className="flex flex-col gap-2">
                <div className="w-5 h-5">
                  <Info className="w-5 h-5 text-gray-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Você pode alterar novamente <span className="font-semibold">até às 14h de hoje, se precisar.</span> Após esse horário, não é possível personalizar suas refeições.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fixed CTA */}
          <div className="p-4 pt-3 border-t border-gray-200 bg-white">
            <button
              onClick={onEditMeal}
              className="w-full bg-[#286EF1] hover:bg-[#1e5cd4] text-white font-medium py-3 px-5 rounded-full transition text-sm"
            >
              Editar refeição
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
