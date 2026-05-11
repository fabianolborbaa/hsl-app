import { Clock3, Info } from 'lucide-react';

export default function PasswordScreen() {
  return (
    <div className="menu-canvas">
      <div className="menu-mobile-frame bg-white overflow-hidden">
        <div className="flex flex-col h-full">
          <div className="bg-[var(--hsl-menu-color-brand)] px-4 pb-4 h-36 flex items-end">
            <div className="flex items-end justify-between w-full">
              <div>
                <h1 className="menu-header-title">Resumo da ficha de atendimento</h1>
                <p className="menu-header-caption">Válido até 30/08/2023 às 18:30</p>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <span className="menu-avatar-text">BT</span>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-5">
            <section className="senha-ticket-card">
              <p className="senha-ticket-label">Senha de atendimento</p>
              <p className="senha-ticket-code">PR306</p>
              <p className="senha-status-badge">Inativa</p>
              <button className="senha-wait-link" type="button">
                Acessar tempo médio de espera
                <Clock3 size={14} />
              </button>
            </section>

            <section className="menu-info-card senha-help-card">
              <Info size={18} className="menu-muted-icon" />
              <div className="space-y-3">
                <p className="menu-item-title">O que fazer agora?</p>
                <p className="menu-body">
                  Sua senha ainda não está ativa e não poderemos chamá-lo.
                </p>
                <p className="menu-body">
                  Para ativar, é necessário <span className="menu-body-strong">estar no hospital</span> e clicar no botão <span className="menu-body-strong">“Ativar senha”.</span>
                </p>
              </div>
            </section>

            <section className="senha-info-section">
              <h2 className="senha-section-title">Informações gerais</h2>
              <div className="space-y-4">
                <p className="menu-body">
                  <span className="menu-body-strong">Paciente:</span> Bruno Tavares
                </p>
                <div>
                  <p className="menu-body-strong">Hospital Bela Vista - Pronto atendimento</p>
                  <p className="menu-muted">R. Barata Ribeiro, 387 - Bela Vista, São Paulo - SP</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
