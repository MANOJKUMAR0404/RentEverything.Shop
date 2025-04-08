        function validateLocation() {
            const locationInput = document.getElementById("location").value;
            if (
                locationInput === "" ||
                locationInput === "User denied location access." ||
                locationInput === "Geolocation not supported."
            ) {
                alert("Please allow location access to proceed with the rental request.");
                return false;
            }
            return true;
        }
    
        window.onload = function () {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function(position) {
                        const lat = position.coords.latitude.toFixed(6);
                        const lon = position.coords.longitude.toFixed(6);
                        document.getElementById("location").value = `Latitude: ${lat}, Longitude: ${lon}`;
                    },
                    function(error) {
                        document.getElementById("location").value = "User denied location access.";
                    }
                );
            } else {
                document.getElementById("location").value = "Geolocation not supported.";
            }
        };