import React from "react";

import carousel from './asset/carousel.png';

function Home() {
  return(
    <div className="container">
      <div className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100 slider" src={carousel} alt="First slide"/>
          </div>
        </div> 
      </div>  
      <div class="text-center">
        <h1 className="dangling-font text-big">For a better reproductive health</h1> 
      </div>
      <h2 className="text-center mont-font">Statistic in the US</h2>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner text-center carousel-inner__text bg-0">
          <div class="carousel-item w-100 active ">
            <p className="carousel__text mont-font">Percent of women aged 15-49 who have ever been treated for pelvic inflammatory disease (PID): 3.8%</p>
          </div>
          <div class="carousel-item w-100">
            <p className="carousel__text mont-font">Mean age at first menstrual period for women aged 15-49: 12.5 years</p>
          </div>
          <div class="carousel-item w-100">
            <p className="carousel__text mont-font">Percent of never-married teens aged 15-19 who have ever had sexual intercourse: Females 41.6%, Males 37.5% (2015-2017)</p>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon bg-1" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon bg-1" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    )
  }

export default Home;
