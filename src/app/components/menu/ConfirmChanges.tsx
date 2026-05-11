import { X, Coffee, IceCream } from 'lucide-react';

interface ConfirmChangesProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmChanges({ onConfirm, onCancel }: ConfirmChangesProps) {
  return (
    <div className="absolute inset-0 bg-black/20 flex items-end">
      <div className="menu-sheet bg-white rounded-t-3xl shadow-2xl w-full pt-6 px-6 relative animate-slide-up">
        <button onClick={onCancel} className="absolute right-4 top-4 p-1 hover:bg-gray-100 rounded-full transition">
          <X size={20} className="menu-body" />
        </button>

        <h2 className="menu-sheet-title mb-4 pr-6">
          Confirme as alterações no seu jantar de amanhã:
        </h2>

        <div className="space-y-4">
          <p className="menu-section-title">
            Filé de Tilápia Grelhado
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <Coffee className="w-5 h-5 menu-icon flex-shrink-0 mt-0.5" />
              <div>
                <p className="menu-item-title">Sopa</p>
                <p className="menu-body">Canja sem sal</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <IceCream className="w-5 h-5 menu-icon flex-shrink-0 mt-0.5" />
              <div>
                <p className="menu-item-title">Sobremesa</p>
                <p className="menu-body">Gelatinas sortidas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2 mt-6">
          <button
            onClick={onConfirm}
            className="w-full menu-primary-button py-3 px-5 rounded-full transition"
          >
            Confirmar alterações
          </button>
          <button
            onClick={onCancel}
            className="w-full menu-secondary-button py-3 px-5 rounded-full transition"
          >
            Voltar para alterações
          </button>
        </div>
      </div>
    </div>
  );
}
