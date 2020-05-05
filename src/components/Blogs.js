import React from 'react' ;

const Blogs = () => {
return (
  <div>
    <div className="row">
      <div className="col s12 m12 l12 image-container-blog-page">
        <div className="center">
          <h3>Blogs</h3>

          <div className="col s12 m4 l4">
            <div className="card">
              <div className="card-content">
                <div class="card-image">
                  <img src="https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=761&q=80" />
                </div>
                <span className="card-title">
                  <a href="#">
                    <h5>5 Ways to Memorize Easily & Efficiently !</h5>{" "}
                  </a>
                </span>
                <p>
                  I love Examarly's membership — it gives me access to the
                  stories I love by the writers & Books.
                </p>
                <a className="waves-effect waves-light btn card-btn">
                  Read More...{" "}
                  <i className="material-icons right">arrow_right_alt</i>
                </a>
                <div className="img-profile">
                  {" "}
                  <img src="https://scontent.fbho1-1.fna.fbcdn.net/v/t1.0-9/p720x720/41177727_1456558767821714_906729959110737920_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=IUN3RbO29qUAX_iDdbB&_nc_ht=scontent.fbho1-1.fna&_nc_tp=6&oh=3793eb3cfbdff7756c7c4caefd927c64&oe=5ECCEF3A" />{" "}
                  <h6> By Pranjal Doorwar </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col s12 m4 l4">
            <div className="card">
              <div className="card-content">
                <div class="card-image">
                  <img src="https://miro.medium.com/max/2000/1*zMvABB484R9uj33He2-A_w.png" />
                </div>
                <span className="card-title">
                  <h5>How I Learnt About Cryptocurrencies in 2 Months</h5>
                </span>
                <p>
                  Blockchain, Cryptocurrency, Bitcoin… those are 3 buzz words we
                  keep hearing about 😬. Lets learn it.
                </p>
                <a className="waves-effect waves-light btn card-btn">
                  Read More...{" "}
                  <i className="material-icons right">arrow_right_alt</i>
                </a>
              </div>
            </div>
          </div>

          <div className="col s12 m4 l4">
            <div className="card">
              <div className="card-content">
                <div class="card-image">
                  <img
                    src="
          https://miro.medium.com/max/1400/1*g4slXvguOTzTbd1blaCpuQ.jpeg"
                  />
                </div>
                <span className="card-title">
                  <h5>Decided to Learn Something Online — Now What?</h5>
                </span>
                <p>
                  A strategy for actually getting through that course you just
                  signed up for. No more Procastrination.
                </p>
                <a className="waves-effect waves-light btn card-btn">
                  Read More...{" "}
                  <i className="material-icons right">arrow_right_alt</i>
                </a>
              </div>
            </div>
          </div>

       














          
        </div>
      </div>
    </div>
  </div>
);
}

export default Blogs  ;