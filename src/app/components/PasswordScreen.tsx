import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function PasswordScreen() {
  return (
    <div className="menu-canvas senha-modern">
      <div className="menu-mobile-frame overflow-hidden">
        <div className="flex flex-col h-full">
          <div className="senha-modern-header px-4 pb-4 h-[120px] flex items-end">
            <div className="flex items-end justify-between w-full">
              <div>
                <h1 className="menu-header-title">Resumo da ficha de atendimento</h1>
                <p className="menu-header-caption">Válido até 30/08/2023 às 18:30</p>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <span className="menu-avatar-text">NL</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 min-h-0">
            <div className="senha-content-enter flex-1 overflow-y-auto p-4 space-y-5">
              <section className="senha-ticket-card">
                <p className="senha-ticket-label">Senha de atendimento</p>
                <p className="senha-ticket-code">PR306</p>
                <p className="senha-status-badge">Ativa</p>
                <div className="senha-ticket-separator" aria-hidden="true" />
                <button className="senha-wait-link" type="button">
                  Acessar tempo médio de espera
                  <AccessTimeOutlinedIcon />
                </button>
              </section>

              <section className="menu-info-card senha-details-card">
                <div className="senha-details-block">
                  <div className="senha-details-heading">
                    <span className="senha-details-icon">
                      <InfoOutlinedIcon />
                    </span>
                    <div>
                      <p className="senha-details-eyebrow">Próximo passo</p>
                      <p className="menu-item-title">O que fazer agora?</p>
                    </div>
                  </div>
                  <div className="senha-details-copy">
                    <p className="menu-body">
                      Sua senha está ativa e você já pode ser chamado.
                    </p>
                    <p className="menu-body">
                      Aguarde próximo ao painel e acompanhe o chamado da sua senha.
                    </p>
                  </div>
                </div>

                <div className="senha-details-divider" aria-hidden="true" />

                <div className="senha-details-block">
                  <div className="senha-details-heading">
                    <span className="senha-details-icon">
                      <LocationOnOutlinedIcon />
                    </span>
                    <div>
                      <p className="senha-details-eyebrow">Atendimento</p>
                      <p className="menu-item-title">Informações gerais</p>
                    </div>
                  </div>
                  <div className="senha-info-list">
                    <div className="senha-info-row">
                      <span className="senha-info-label">Paciente</span>
                      <span className="senha-info-value">Bruno Tavares</span>
                    </div>
                    <div className="senha-info-row">
                      <span className="senha-info-label">Local</span>
                      <div>
                        <p className="senha-info-value">Hospital Bela Vista</p>
                        <p className="menu-muted">Pronto atendimento</p>
                      </div>
                    </div>
                    <div className="senha-info-row senha-info-row-address">
                      <span className="senha-info-label">Endereço</span>
                      <p className="menu-muted">R. Barata Ribeiro, 387 - Bela Vista, São Paulo - SP</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="menu-cta-footer border-t border-gray-200">
              <button className="w-full menu-primary-button py-3 px-5 rounded-full transition" type="button">
                Ativar senha
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
