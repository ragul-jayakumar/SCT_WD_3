function submit() {
                let count = 0;
                const fri = document.getElementById("score");

                // Loop through all options
                document.querySelectorAll(".option").forEach(opt => {
                    let checkbox = opt.querySelector("input[type='checkbox']");
                    if (checkbox.checked && opt.dataset.correct === "true") {
                        count++;
                    }
                });

                fri.textContent = count; // update score
            }

            function retry() {
                document.querySelectorAll("input[type='checkbox']").forEach(cb => cb.checked = false);
                document.getElementById("score").textContent = 0;
            }
