    <div className="container-fluid container__margin text-center">
        <div>
          <h3 className="mont-font">Sexual and Reproductive Anatomy</h3>
          <p>Reproductive and sexual anatomy includes your genitals and your internal sex and reproductive organs. Everyone’s reproductive and sexual anatomy looks a little different.</p>
        </div>
        <div className="quiz bg-1 container-fluid container__margin text-center text-white">
          <h4 className="mont-font text-center">Are you female or male?</h4>
            <div 
                className="ui floating message options"
                onClick={() => {
                    setVideoStart(true);
                    setVideoPlayList(FemalePlaylist);
                    }
                }
            >
                Female
            </div>
            <div className="ui floating message options"> Male</div>

          <span className="">{`Questions ${currentQuestion+1} out of ${QUIZ_DATA.length}`}</span>
            {options.map(option => (
              <p 
                key={option.id}
                className={`ui floating message options
                  ${userAnswer === option ? "selected" : ""}
                  `}
                onClick={() => this.checkAnswer(option)}
              >
                {option}
              </p>
            ))}
            {currentQuestion < QUIZ_DATA.length-1 && 
            <button onClick={this.nextQuestionHandler} className="btn btn-outline-light"> Next </button>
            }
            {currentQuestion === QUIZ_DATA.length-1 && 
            <button onClick={this.finishHandler}> Finish </button>
          }
        </div>
      </div>




 <Link to="/">
              <img className="logo" src={logo} alt={"logo"} style={{width:"120px"}} />
            </Link> <Link to="/">
              <img className="logo" src={logo} alt={"logo"} style={{width:"120px"}} />
            </Link>