export default function IslandForm({ island, incrementVisitors }) {
  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input id="name" placeholder="Type Full Name" />
      <input
        id="phone"
        type="tel"
        placeholder="xxxx-xxxx"
        pattern="[0-9]{4}-[0-9]{4}"
        required
      />
      <button
        className="book"
        onClick={() => {
          if (
            window.confirm(
              `Are you sure you want to book to ${island.name} with the Name: ${
                document.getElementById("name").value
              }, phone: ${document.getElementById("phone").value}`
            )
          ) {
            alert("Thank you!");
            incrementVisitors(island);
          }
        }}
      >
        Book for today!
      </button>
    </div>
  );
}
