import "./App.css";
import {useState, useEffect} from "react"


function App() {

  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const newScroll = document.documentElement.scrollTop;
    const newHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // console.log(newScroll);
    // console.log(newHeight);
    
    const scrolled = (newScroll / newHeight) * 100;

    setScrollTop(scrolled)
  }
  
  useEffect(() => {
    window.addEventListener("scroll", onScroll)
  },[]);
  


  return (
    <div className="App">
      <div className="wrapper">
        <div className="progress" style={{width : `${scrollTop}%`}}></div>
      </div>
      <h1>Lorem is Lorem</h1>
      <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel iure quos molestias nesciunt eaque veniam quisquam provident sunt itaque reiciendis dolor consequatur neque, aut, expedita, minus tempore impedit laboriosam dignissimos libero velit fugiat saepe earum? Ad laboriosam alias magnam natus repellat eaque dolor incidunt? Aliquam distinctio maiores earum perspiciatis illum debitis necessitatibus! Doloremque, non excepturi. Ipsam similique sunt totam exercitationem at itaque veniam cum autem beatae quam? Repellat atque quos deserunt maxime eius libero! Voluptatibus a esse, consectetur porro reprehenderit deserunt velit temporibus hic aperiam amet, sequi quasi eligendi repellat nisi mollitia nobis. Laborum asperiores soluta commodi quas modi hic quo repellat placeat tenetur eaque, assumenda perferendis quod, libero maiores numquam facilis fuga alias est! Repudiandae, porro? Doloremque harum veritatis iusto. Quos magnam necessitatibus repudiandae corrupti facere? Provident, animi veniam nobis accusantium repudiandae nostrum consequuntur? Laborum accusantium ipsa, nobis iste expedita in ab numquam ex ullam soluta ea sequi officia, atque eaque delectus? Nobis nulla vero sequi sed vel asperiores voluptatibus sunt ipsa mollitia, hic rerum unde maiores numquam ducimus sapiente repudiandae atque assumenda? Fugit distinctio et molestiae quia aperiam, laborum nobis repellat eligendi! Voluptatem provident illo, sed eos accusantium hic id sapiente incidunt maiores eum, recusandae optio quis consequatur error aut doloribus nulla quia minus molestiae et dolor? Libero eius odio quidem, asperiores repellendus fuga! Laudantium similique ipsum veritatis animi harum, culpa nemo distinctio inventore cupiditate delectus tenetur at? Odit sint voluptates saepe, voluptatum sapiente fugit rerum. Maiores, dignissimos ducimus velit molestiae eaque quis, explicabo fuga quo repellendus, tenetur ut nam beatae cupiditate voluptate veritatis est dicta voluptatem iusto delectus iste voluptatibus soluta id? Porro nulla atque, tempora veritatis repellat natus ipsa magnam optio, quod dolor excepturi, mollitia consequuntur eligendi ullam iusto veniam officiis. Praesentium maiores eos possimus dolorum officiis minus consequatur, debitis reiciendis architecto quasi. Non harum culpa voluptate? Labore sunt, sapiente similique perferendis quas aut? Veritatis quisquam autem cumque, blanditiis possimus ut quos fugit cum iusto, sequi aspernatur optio repellat dolor. Necessitatibus eveniet deleniti fugit inventore asperiores dolorem recusandae voluptas odit maiores culpa tempora aliquid praesentium nemo accusantium, perferendis eaque dolores debitis laboriosam. Molestias ex corporis mollitia eos, fugit magnam ipsam blanditiis ut harum ea error sunt unde quaerat ab maxime quo optio? Est suscipit eos, officia vel quod porro magnam voluptatibus delectus beatae rerum fugiat, maxime et asperiores voluptas atque quidem illum modi alias aspernatur dolorum iure consequuntur ducimus. Veritatis expedita nisi officiis architecto repellendus quo vel, atque dolore odio fuga quis dolores dicta soluta maxime? At nihil earum soluta, fugit, qui deserunt quae, velit corrupti voluptate cupiditate laboriosam illum! Impedit distinctio eius quo amet ipsam alias voluptatum nobis vel iste facere repellendus perferendis, expedita, iusto natus. Tempora architecto ex suscipit, molestiae dolorem velit, harum officia soluta repellendus sit, quasi recusandae atque. Iure quod quam doloremque ratione quos delectus similique rem ab fugit, ipsam maiores natus vitae, iste impedit minima inventore necessitatibus neque ut nesciunt ex amet, eos nostrum iusto. Placeat, modi? Mollitia ad, obcaecati quae repellat ullam illum illo voluptatem adipisci porro quos incidunt minus libero aliquid quidem vero voluptas eos nihil suscipit! Dolores recusandae cupiditate voluptatibus atque sint nulla cumque excepturi, nisi et ut impedit omnis laborum iste consequuntur accusantium amet iusto non esse asperiores, accusamus inventore molestias velit ipsum. Consequatur magnam architecto quaerat ipsa neque expedita dolor aperiam facere dolore amet rem soluta illo illum autem sapiente vitae omnis, eius doloremque ea eos ullam perferendis dignissimos! Mollitia accusamus aperiam nesciunt asperiores rerum praesentium atque. Dolor, culpa. Obcaecati officia aperiam deleniti fugiat voluptatibus sequi ullam nesciunt! Fugit nostrum atque laborum. Explicabo dignissimos omnis facere veniam. Voluptates animi asperiores tenetur facilis cum, sapiente expedita ipsum facere aspernatur voluptate dolore minima sequi deserunt mollitia error totam laborum voluptas doloremque? Esse perspiciatis quos vel autem? Sed nihil ullam ut, obcaecati ipsum quisquam odio porro soluta natus aliquid repellat. Incidunt deserunt aspernatur est dicta corrupti assumenda totam eligendi iste doloribus molestiae perspiciatis aut reprehenderit repudiandae vitae quam, non fugiat quo consectetur laboriosam quidem? 
      </p>
    </div>
  );
}

export default App;
