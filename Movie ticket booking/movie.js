const movieSelect = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.booked)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const confirmBtn = document.getElementById('confirm');
const movieName = document.getElementById('movieName');

const seatPrices = {
  silver: 150,
  gold: 200,
  platinum: 300,
  lounge: 500
};

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.seat.selected');
  let totalPrice = 0;

  selectedSeats.forEach(seat => {
    const type = seat.getAttribute('data-class');
    totalPrice += seatPrices[type];
  });

  count.innerText = selectedSeats.length;
  total.innerText = totalPrice;
}

function resetSeats() {
  seats.forEach(seat => {
    if(!seat.classList.contains('booked')) {
      seat.classList.remove('selected');
    }
  });
  updateSelectedCount();
}

movieSelect.addEventListener('change', e => {
  movieName.innerText = e.target.value;
  resetSeats(); 
});

seats.forEach(seat => {
  seat.addEventListener('click', () => {
    if (!seat.classList.contains('booked')) {
      seat.classList.toggle('selected');
      updateSelectedCount();
    }
  });
});

confirmBtn.addEventListener('click', () => {
  const selectedSeats = document.querySelectorAll('.seat.selected');
  if (selectedSeats.length === 0) {
    alert("Please select at least one seat before confirming!");
  } else {
    let totalPrice = 0;
    selectedSeats.forEach(seat => {
      const type = seat.getAttribute('data-class');
      totalPrice += seatPrices[type];
    });

    alert(`Booking confirmed!\nMovie: ${movieName.innerText}\nSeats: ${selectedSeats.length}\nTotal: ₹${totalPrice}`);
    selectedSeats.forEach(seat => {
      seat.classList.remove('selected');
      seat.classList.add('booked');
    });
    updateSelectedCount();
  }
});
