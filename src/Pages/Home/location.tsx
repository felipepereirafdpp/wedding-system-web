import "./location.css";

const Location = () => {
  const address = "Rua Joao Carvalho , 135"; // alterar o endereço, NECESSáRIO passar o número.

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <section className="location">
      
      <div className="location-map-frame">
        <div className="location-map">
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              address
            )}&output=embed`}
            loading="lazy"
            allowFullScreen
            title="Local do evento"
          />
        </div>
      </div>
      <div className="location-info">
        <div className="location-info-item">
          <div className="location-info-icon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 3" />
            </svg>
          </div>
          <div className="location-info-text">
            <span>Horário</span>
            <p>A partir das 18h20 · até o amanhecer</p>
          </div>
        </div>

        <div className="location-info-item">
          <div className="location-info-icon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 12 2.5a7 7 0 0 1 7 7C19 14.8 12 21 12 21Z" />
              <circle cx="12" cy="9.5" r="2.3" />
            </svg>
          </div>
          <div className="location-info-text">
            <span>Local</span>
            <p>Estrada da Cantareira, 1200</p>
          </div>
        </div>

        <div className="location-info-item">
          <div className="location-info-icon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 4 5 6.5 2 10l3 3 1.5-1.2V21h11V11.8L19 13l3-3-3-3.5L15 4c0 1.7-1.3 3-3 3s-3-1.3-3-3Z" />
            </svg>
          </div>
          <div className="location-info-text">
            <span>Traje</span>
            <p>Esporte fino, em tons terrosos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;