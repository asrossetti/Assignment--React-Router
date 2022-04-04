import NavBar from "../Components/NavBar";
export default function Projects() {
    const newLocal = <div class="container">
        <div class="modal">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Distinctio deserunt amet accusantium iure possimus facere architecto.Vel, aspernatur.Quae consectetur nesciunt obcaecati iure?Voluptas fugit in ab repellendus atque eius.
            </p>

            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur repellat iusto reiciendis eveniet repellendus tenetur. Ducimus soluta alias eveniet ratione unde sint eaque dolorum iste, sed reprehenderit totam rem, eos quos odit sit tempore. Minus sit distinctio debitis tempora, quae iusto repellendus perferendis laudantium doloremque, quaerat atque numquam error exercitationem!
            </p>

            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur repellat iusto reiciendis eveniet repellendus tenetur. Ducimus soluta alias eveniet ratione unde sint eaque dolorum iste, sed reprehenderit totam rem, eos quos odit sit tempore. Minus sit distinctio debitis tempora, quae iusto repellendus perferendis laudantium doloremque, quaerat atque numquam error exercitationem!
            </p>

            <div class="myimage">
                <div class="image-container">
                    <img src="https://qph.cf2.quoracdn.net/main-qimg-67ba619f851eef2a74e66855e124343a-lq" class="slide" width="500" height="300" />
                </div>
            </div>
        </div>
    </div>;
    return (
        <div>
            <NavBar />
            <main class="projectMain">
            </main>
            <article>
                {newLocal}
            </article>

        </div>
    );
}
