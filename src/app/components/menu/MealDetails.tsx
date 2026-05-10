import { ArrowLeft, Coffee, Salad, UtensilsCrossed, IceCream, Plus, Info } from 'lucide-react';

interface MealDetailsProps {
  onBack: () => void;
  onEditMeal: () => void;
}

export default function MealDetails({ onBack, onEditMeal }: MealDetailsProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="menu-mobile-frame bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="flex flex-col h-full">

          {/* Header */}
          <div className="bg-[var(--hsl-menu-color-brand)] px-4 pb-4 h-36 flex items-end">
            <div className="flex items-end justify-between w-full">
              <div className="flex items-end gap-3 flex-1">
                <button onClick={onBack} className="p-1 -ml-1 active:opacity-70 mb-0.5">
                  <ArrowLeft size={24} className="menu-header-icon" />
                </button>
                <div>
                  <h1 className="menu-header-title">Jantar de amanhã</h1>
                  <p className="menu-header-caption">Conta: Particular</p>
                </div>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <span className="menu-avatar-text">BT</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">

            {/* Meal Title */}
            <div>
              <h2 className="menu-title-lg mb-2">
                Filé de Tilápia Grelhado
              </h2>
              <p className="menu-muted">Acompanhamentos</p>
            </div>

            {/* Items List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Coffee className="w-5 h-5 menu-icon flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="menu-item-title">Sopa</p>
                  <p className="menu-body">Creme de palmito sem sal</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Salad className="w-5 h-5 menu-icon flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="menu-item-title">Salada</p>
                  <p className="menu-body">Salada e alface roxo com tomate</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <UtensilsCrossed className="w-5 h-5 menu-icon flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="menu-item-title">Guarnição</p>
                  <p className="menu-body">Arroz integral com sal, Quiche de alho poró com sal</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <IceCream className="w-5 h-5 menu-icon flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="menu-item-title">Sobremesa</p>
                  <p className="menu-body">Salada de frutas</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Plus className="w-5 h-5 menu-icon flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="menu-item-title">Opcionais</p>
                  <p className="menu-body">Limão no peixe</p>
                </div>
              </div>
            </div>

            {/* Info Card */}
            <div className="menu-info-card">
              <div className="flex flex-col gap-2">
                <div className="w-5 h-5">
                  <Info className="w-5 h-5 menu-muted-icon" />
                </div>
                <div>
                  <p className="menu-caption">
                    Você pode alterar novamente <span className="menu-caption-strong">até às 14h de hoje, se precisar.</span> Após esse horário, não é possível personalizar suas refeições.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fixed CTA */}
          <div className="menu-cta-footer border-t border-gray-200">
            <button
              onClick={onEditMeal}
              className="w-full menu-primary-button py-3 px-5 rounded-full transition"
            >
              Editar refeição
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
