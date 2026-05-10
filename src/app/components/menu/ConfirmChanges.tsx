import { ArrowLeft, X, Coffee, IceCream } from 'lucide-react';

interface ConfirmChangesProps {
  onBack: () => void;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmChanges({ onBack, onConfirm, onCancel }: ConfirmChangesProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[375px] bg-white rounded-3xl shadow-xl overflow-hidden min-h-[812px] relative">
        <div className="flex flex-col h-full">

          {/* Header */}
          <div className="bg-[#286EF1] px-4 pb-4 h-36 flex items-end">
            <div className="flex items-end justify-between w-full">
              <div className="flex items-end gap-3 flex-1">
                <button onClick={onBack} className="p-1 -ml-1 active:opacity-70 mb-0.5">
                  <ArrowLeft size={24} className="text-white" />
                </button>
                <div>
                  <h1 className="text-white text-sm font-semibold">Edição do jantar</h1>
                  <p className="text-white/90 text-xs">Conta: Particular</p>
                </div>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#286EF1] text-xs font-bold">BT</span>
              </div>
            </div>
          </div>

          {/* Background Content (partially visible) */}
          <div className="flex-1 p-4 space-y-3 opacity-30">
            <div className="flex items-center gap-2">
              <Coffee className="w-5 h-5 text-gray-700" />
              <p className="text-base font-semibold text-gray-900">Sopa</p>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <label className="text-sm text-gray-900 flex-1">Creme de palmito sem sal</label>
              <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
            </div>
          </div>

          {/* Bottom Sheet Overlay */}
          <div className="absolute inset-0 bg-black/20 flex items-end">
            <div className="bg-white rounded-t-3xl shadow-2xl w-full pb-4 pt-6 px-6 relative animate-slide-up">
              <button onClick={onCancel} className="absolute right-4 top-4 p-1 hover:bg-gray-100 rounded-full transition">
                <X size={20} className="text-gray-600" />
              </button>

              <h2 className="text-lg font-bold text-gray-900 mb-4 pr-6 leading-tight">
                Confirme as alterações no seu jantar de amanhã:
              </h2>

              <div className="space-y-4">
                <p className="text-base font-bold text-gray-900">
                  Filé de Tilápia Grelhado
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Coffee className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Sopa</p>
                      <p className="text-sm text-gray-600">Canja sem sal</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <IceCream className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Sobremesa</p>
                      <p className="text-sm text-gray-600">Gelatinas sortidas</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mt-6">
                <button
                  onClick={onConfirm}
                  className="w-full bg-[#286EF1] hover:bg-[#1e5cd4] text-white font-medium py-3 px-5 rounded-full transition text-sm"
                >
                  Confirmar alterações
                </button>
                <button
                  onClick={onCancel}
                  className="w-full border border-[#286EF1] text-[#286EF1] hover:bg-[#286EF1]/5 font-medium py-3 px-5 rounded-full transition text-sm"
                >
                  Voltar para alterações
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
