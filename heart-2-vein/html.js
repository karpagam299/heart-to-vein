// Example donor data (replace or load from your backend later)
const donors = [
  { name: "Alice Johnson", bloodGroup: "A+", location: "New York" },
  { name: "Bob Smith", bloodGroup: "O-", location: "Los Angeles" },
  { name: "Charlie Lee", bloodGroup: "B+", location: "Chicago" },
  { name: "Diana Patel", bloodGroup: "A-", location: "New York" },
  { name: "Eve Chen", bloodGroup: "O+", location: "Los Angeles" },
  { name: "Frank Wright", bloodGroup: "AB-", location: "Houston" },
  { name: "Grace Kim", bloodGroup: "AB+", location: "Chicago" }
];
                    
// Handle form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("donorForm");
  const resultsDiv = document.getElementById("results");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const bloodGroup = document.getElementById("bloodGroup").value.trim();
    const location = document.getElementById("location").value.trim().toLowerCase();

    // Filter donors
    const filteredDonors = donors.filter(donor => {
      const matchesBloodGroup = bloodGroup === "" || donor.bloodGroup === bloodGroup;
      const matchesLocation =
        location === "" || donor.location.toLowerCase().includes(location);
      return matchesBloodGroup && matchesLocation;
    });

    // Display results
    resultsDiv.innerHTML = ""; // Clear previous results

    if (filteredDonors.length === 0) {
      resultsDiv.innerHTML = `<p>No matching donors found.</p>`;
      return;
    }

    const list = document.createElement("ul");
    filteredDonors.forEach(donor => {
      const listItem = document.createElement("li");
      listItem.textContent = `${donor.name} - ${donor.bloodGroup} (${donor.location})`;
      list.appendChild(listItem);
    });
    resultsDiv.appendChild(list);
  });
});
