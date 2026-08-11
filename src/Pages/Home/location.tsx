import "./location.css";

const Location = () => {
  const address = "Rua Joao Carvalho , 135"; // alterar o endereço, NECESSáRIO passar o número.

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <section className="location">
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

      <div className="location-info">
        <p>
          <strong>Horário</strong> - 18h20 até o amanhecer
        </p>

        <p>
          <strong>Endereço</strong> - Estrada da Cantareira, 1200
        </p>

        <p>
          <strong>Traje</strong> - Esporte fino, tons de terra
        </p>

        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="location-button"
        >
          Como chegar
        </a>
      </div>
    </section>
  );
};

export default Location;