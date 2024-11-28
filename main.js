const birthday_year = document.getElementById("birthday_year");
const birthday_month = document.getElementById("birthday_month");
const birthday_day = document.getElementById("birthday_day");
const aujourdhui = new Date();

const erreur_mois = document.getElementById("erreur_mois");
const container_mois = document.getElementById("container_mois");
const container_mois_label = document.getElementById("container_mois_label");

const erreur_jour = document.getElementById("erreur_jour");
const container_jour_label = document.querySelector("label[for='birthday_day']");
const container_jour = birthday_day.closest(".flex");

const erreur_annee = document.getElementById("erreur_annee");
const container_annee_label = document.querySelector("label[for='birthday_year']");
const container_annee = birthday_year.closest(".flex");

const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");

const form = document.querySelector("form");

birthday_month.addEventListener('input', () => {
  const month = parseInt(birthday_month.value, 10);

  if (month < 1 || month > 12) {
    erreur_mois.classList.remove("hidden");
    container_mois_label.classList.add("text-red-600");
    birthday_month.classList.add("border-red-400");
    container_mois.classList.add("text-red-600");
  } else {
    erreur_mois.classList.add("hidden");
    container_mois_label.classList.remove("text-red-600");
    birthday_month.classList.remove("border-red-400");
    container_mois.classList.remove("text-red-600");
  }
});

birthday_day.addEventListener('input', () => {
  const day = parseInt(birthday_day.value, 10);

  if (day < 1 || day > 31) {
    erreur_jour.classList.remove("hidden");
    container_jour_label.classList.add("text-red-600");
    birthday_day.classList.add("border-red-400");
    container_jour.classList.add("text-red-600");
  } else {
    erreur_jour.classList.add("hidden");
    container_jour_label.classList.remove("text-red-600");
    birthday_day.classList.remove("border-red-400");
    container_jour.classList.remove("text-red-600");
  }
});

birthday_year.addEventListener('input', () => {
  const year = parseInt(birthday_year.value, 10);

  if (year < 1899 || year > 2024) {
    erreur_annee.classList.remove("hidden");
    container_annee_label.classList.add("text-red-600");
    birthday_year.classList.add("border-red-400");
    container_annee.classList.add("text-red-600");
  } else {
    erreur_annee.classList.add("hidden");
    container_annee_label.classList.remove("text-red-600");
    birthday_year.classList.remove("border-red-400");
    container_annee.classList.remove("text-red-600");
  }
});

function submitHandler(event) {
  event.preventDefault();

  const month = parseInt(birthday_month.value, 10);
  const day = parseInt(birthday_day.value, 10);
  const year = parseInt(birthday_year.value, 10);

  if (month < 1 || month > 12 || day < 1 || day > 31 || year < 1899 || year > 2024) {
    return;
  }

  if (!birthday_day.value || !birthday_month.value || !birthday_year.value) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  const anniversaire = new Date(
    birthday_year.value,
    birthday_month.value - 1,
    birthday_day.value
  );

  if (isNaN(anniversaire.getTime())) {
    alert("Date invalide. Veuillez vérifier les champs.");
    return;
  }

  let ageAnnees = aujourdhui.getFullYear() - anniversaire.getFullYear();
  let ageMois = aujourdhui.getMonth() - anniversaire.getMonth();
  let ageJours = aujourdhui.getDate() - anniversaire.getDate();

  if (ageJours < 0) {
    ageMois -= 1;
    const dernierJourMoisPrecedent = new Date(
      aujourdhui.getFullYear(),
      aujourdhui.getMonth(),
      0
    ).getDate();
    ageJours += dernierJourMoisPrecedent;
  }

  if (ageMois < 0) {
    ageAnnees -= 1;
    ageMois += 12;
  }

  console.log(ageAnnees + " ans.");
  console.log(ageMois + " mois.");
  console.log(ageJours + " jours.");

  document.getElementById("year").textContent = ageAnnees;
  document.getElementById("month").textContent = ageMois;
  document.getElementById("day").textContent = ageJours;
}

form.addEventListener("submit", submitHandler);
