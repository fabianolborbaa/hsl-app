import { ArrowLeft, Info, Clock } from 'lucide-react';

export default function AppointmentSummary() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[375px] bg-white rounded-3xl shadow-xl overflow-hidden min-h-[812px]">
        {/* Mobile Container */}
        <div className="flex flex-col h-full">

          {/* Header */}
          <div className="bg-[#1749a6] px-4 pb-4 h-[120px] flex items-end">
            <div className="flex items-end justify-between w-full">
              <div className="flex items-end gap-3 flex-1">
                <button className="p-1 -ml-1 active:opacity-70 mb-0.5">
                  <ArrowLeft size={24} className="text-white" />
                </button>
                <div>
                  <h1 className="text-white text-sm font-semibold">
                    Resumo da ficha de atendimento
                  </h1>
                  <p className="text-white/90 text-xs">
                    Válido até 30/08/2023 às 18:30
                  </p>
                </div>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#286EF1] text-xs font-bold">BT</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">

            {/* Senha Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <p className="text-sm text-gray-700 mb-2">Senha de atendimento</p>
              <h2 className="text-5xl font-bold text-[#093A97] mb-2">PR306</h2>
              <span className="inline-block px-3 py-1 bg-white border border-[#DEA35F] text-[#DEA35F] text-xs font-medium rounded mb-3">
                Inativa
              </span>
              <button className="text-sm text-[#286EF1] font-medium flex items-center justify-center gap-1.5 mx-auto hover:underline mt-2">
                <Clock size={16} />
                Acessar tempo médio de espera
              </button>
            </div>

            {/* Info Card */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <div className="flex flex-col gap-2">
                <div className="w-5 h-5">
                  <Info size={20} className="text-gray-500" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    O que fazer agora?
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed mb-3">
                    Sua senha ainda não está ativa e não poderemos chamá-lo.
                  </p>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Para ativar, é necessário <span className="font-semibold">estar no hospital</span> e clicar no botão <span className="font-semibold">"Ativar senha"</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-1"></div>

            {/* Informações Gerais */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-gray-900">
                Informações gerais
              </h3>

              <div className="space-y-2">
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Paciente: <span className="font-normal">Bruno Tavares</span>
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-0.5">
                    Hospital Bela Vista - Pronto atendimento
                  </p>
                  <p className="text-xs text-gray-600">
                    R. Barata Ribeiro, 387 - Bela Vista, São Paulo - SP
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
