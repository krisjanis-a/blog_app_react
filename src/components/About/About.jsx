import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1 className="about_heading">About this website</h1>
      <p className="about_description">
        This is a blog about nature, reservoirs, natural parks with aim of
        informing, educating and entertaining people. Lorem, ipsum dolor sit
        amet consectetur adipisicing elit. Atque, omnis, sunt eveniet quod
        laborum expedita ad sed error possimus harum odit nulla autem aperiam
        asperiores porro delectus sit iure repellat tempora! Culpa minus sed
        neque error consequatur eveniet obcaecati, adipisci id soluta eum illum
        eaque officiis rem sint ex ab aspernatur natus asperiores in. Nisi quia
        maxime incidunt, libero facere sequi labore ipsum ratione vero adipisci
        velit quae quibusdam exercitationem non illo aliquam possimus veritatis.
        Magnam nulla explicabo dolorem reiciendis ipsa, exercitationem est, vero
        non omnis voluptatum beatae eos eius adipisci optio aliquid fugiat autem
        maiores asperiores voluptate voluptates velit nemo? Exercitationem
        doloribus vel inventore, beatae impedit sunt voluptatibus odit iste
        assumenda deserunt, itaque earum veritatis ipsa quis totam maiores!
        Atque repudiandae aperiam modi repellat impedit, distinctio ullam
        ratione dolor iusto provident rerum fugit quia architecto ex. Unde,
        corrupti optio cupiditate doloremque laboriosam nemo minus quasi iusto,
        vero voluptas quo!
      </p>
      <div className="about_image_container">
        <img
          src="https://images.unsplash.com/photo-1605537075888-88a61728d8aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="Water Reservoir"
          className="about_image"
        />
      </div>
    </div>
  );
};

export default About;
