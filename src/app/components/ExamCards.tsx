import { ClipboardList, ChevronRight, Truck } from 'lucide-react';
import CardapioImage from './CardapioImage';

export default function ExamCards() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[375px] bg-white rounded-3xl shadow-xl overflow-hidden min-h-[812px]">
        {/* Mobile Container */}
        <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">

          {/* Exam Cards */}
          <div className="space-y-3">
            {/* Exam Card 1 - Pending */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 active:bg-gray-50 transition cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ClipboardList size={18} className="text-gray-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    Transaminases TGP e TGO.
                  </h3>
                  <p className="text-xs text-gray-500 mb-2">
                    Realizado em 10/05
                  </p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <p className="text-xs text-orange-600 font-medium">
                      Resultado em 28/05
                    </p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-[#286EF1] flex-shrink-0" />
              </div>
            </div>

            {/* Exam Card 2 - Released */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 active:bg-gray-50 transition cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ClipboardList size={18} className="text-gray-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    Ultrassonografia de Mamas
                  </h3>
                  <p className="text-xs text-gray-500 mb-2">
                    Realizado em 10/04
                  </p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <p className="text-xs text-green-600 font-medium">
                      Resultado liberado
                    </p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-[#286EF1] flex-shrink-0" />
              </div>
            </div>
          </div>

          {/* Card with Illustration */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 overflow-hidden">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900 mb-1.5">
                  Acesse seu cardápio
                </h2>
                <p className="text-xs text-gray-600">
                  Explore e personalize suas refeições.
                </p>
              </div>
              <div className="w-20 h-20 flex-shrink-0">
                <CardapioImage />
              </div>
            </div>
          </div>

          {/* Alert Card */}
          <div className="bg-[#EBF2FE] border border-[#D6E4FD] rounded-xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 bg-[#286EF1] rounded-xl flex items-center justify-center flex-shrink-0">
                <Truck size={22} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900 leading-relaxed">
                  É <span className="font-semibold">amanhã, às 14h30 (Horário de Brasília)</span>, seu atendimento domiciliar.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Fixed CTA */}
        <div className="p-4 pt-3 border-t border-gray-200 bg-white">
          <button className="w-full bg-[#286EF1] hover:bg-[#1e5cd4] text-white font-medium py-3 px-5 rounded-full transition text-sm">
            Acessar detalhes
          </button>
        </div>

        </div>
      </div>
    </div>
  );
}
