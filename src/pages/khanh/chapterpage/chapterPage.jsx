import React, { useEffect, useRef } from "react";
import "./chapterPage.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import FinalPage from "../../../components/littleQuiz/FinalPage";
import QuestionsPage from "../../../components/littleQuiz/QuestionPage";
import StartingPage from "../../../components/littleQuiz/StartingPage";
import { getChapterByIdThunk } from "../../../store/apiThunk/chapterThunk";
import {
  chapterDetailSelector,
  resourceInChapterSelector,
} from "../../../store/sellectors";
import { getResourceInChapterThunk } from "../../../store/apiThunk/resourceThunk";

export default function ChapterPage() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  console.log(id);
  // console.log(param.id);

  const chapterDetail = useSelector(chapterDetailSelector);
  useEffect(() => {
    dispatch(getChapterByIdThunk(id));
  }, []);

  const resourceDetail = useSelector(resourceInChapterSelector);
  useEffect(() => {
    dispatch(getResourceInChapterThunk(id));
  }, []);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [username, setUsername] = useState("");

  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  const [showStartingPage, setShowStartingPage] = useState(true);
  const [showQuestionsPage, setShowQuestionsPage] = useState(false);
  const [showFinalPage, setShowFinalPage] = useState(false);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  const spanRef = useRef(null);
  const maxCharacterLimit = 400;

  const handleInput = () => {
    const content = spanRef.current.textContent;

    if (content.length > maxCharacterLimit) {
      // If the character limit is exceeded, truncate the text
      spanRef.current.textContent = content.substring(0, maxCharacterLimit);
    }
  };

  console.log(resourceDetail);

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="chapter-container">
      <div className="item item-1">
        <p style={{ marginBottom: "10px" }}>
          Home - My course - Geometry - Chapter 1{" "}
        </p>
        <p style={{ fontSize: "40px", marginBottom: "10px" }}>
          {chapterDetail.name}
        </p>
        <p style={{ fontSize: "20px", marginBottom: "20px" }}>Introduction</p>
        <p style={{ fontSize: "15px" }}>{chapterDetail.intro}</p>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="item item-2">
        <img
          src="https://cdn.luatminhkhue.vn/lmk/article/hnon.png"
          style={{ width: " 70%", height: "70", borderRadius: "50px" }}
        />
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="item item-3">
        <p
          style={{
            fontSize: "20px",
            padding: " 30px 0px 0px 90px",
            color: "white",
          }}
        >
          <span
            style={{
              backgroundColor: "#FF911E",
              borderRadius: "50px",
              padding: "10px 20px",
              fontWeight: "bold",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            Content
          </span>
        </p>
        <p
          style={{
            fontSize: "15px",
            padding: " 30px 90px 0px 90px",
            color: "black",
            paddingBottom: "20px",
          }}
        >
          <span
            style={{
              backgroundColor: "#F2EFE9",
              borderRadius: "50px",
              border: "10px solid #5D70AD",
              padding: "20px",
              display: "inline-block",
              whiteSpace: "pre-line", // This allows text to break into multiple lines
            }}
          >
            {chapterDetail.content}
          </span>
        </p>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="item item-4">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img
            src="src/assets/scholaritPics/image 12.png"
            style={{
              width: "50%",
              height: "10%",
              marginTop: "30px",
              borderRadius: "20px",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            style={{
              backgroundColor: "#FF911E",
              borderRadius: "0px 50px 50px 0px",
              padding: "10px 20px",
              fontWeight: "bold",
              border: "none",
              fontSize: "20px",
            }}
          >
            <span
              style={{
                color: "white",
              }}
            >
              Previous Question
            </span>
          </button>
          <button
            style={{
              backgroundColor: "#FF911E",
              borderRadius: "50px 0px 0px 50px",
              padding: "10px 30px",
              fontWeight: "bold",
              border: "none",
              fontSize: "20px",
            }}
          >
            <span
              style={{
                color: "white",
              }}
            >
              Next Question
            </span>
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <p style={{ margin: "50px 0px 50px 0px" }}>
            <span
              style={{
                backgroundColor: "white",
                borderRadius: "20px",
                padding: "10px 40px ",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Ax + By + C = 0
            </span>
          </p>
          <p style={{ margin: "0px 0px" }}>
            <span
              style={{
                backgroundColor: "white",
                borderRadius: "20px",
                padding: "10px 40px ",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Ax + By + C = 0
            </span>
          </p>
          <p style={{ margin: "50px 0px 40px 0px " }}>
            <span
              style={{
                backgroundColor: "white",
                borderRadius: "20px",
                padding: "10px 40px ",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Ax + By + C = 0
            </span>
          </p>
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="item item-5">
        <p
          style={{
            fontSize: "20px",
            padding: " 30px 0px 0px 90px",
            color: "white",
          }}
        >
          <span
            style={{
              backgroundColor: "#FF911E",
              borderRadius: "50px",
              padding: "10px 20px",
              fontWeight: "bold",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            Summary
          </span>
        </p>
        <p
          style={{
            fontSize: "16px",
            padding: " 30px 90px 0px 90px",
            color: "black",
            paddingBottom: "20px",
          }}
        >
          <span
            style={{
              backgroundColor: "#F2EFE9",
              borderRadius: "50px",
              border: "10px solid #5D70AD",
              padding: "20px",
              display: "inline-block",
              whiteSpace: "pre-line", // This allows text to break into multiple lines
            }}
          >
            {chapterDetail.summary}
          </span>
        </p>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="item item-6">
        <p
          style={{
            fontSize: "20px",
            padding: " 30px 0px 0px 90px",
            color: "white",
          }}
        >
          <span
            style={{
              backgroundColor: "#FF911E",
              borderRadius: "50px",
              padding: "10px 20px",
              fontWeight: "bold",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            Video
          </span>
        </p>
        <div style={{ padding: "30px 0px 0px 90px" }} className="seven">
          {resourceDetail.length > 0 && (
            <iframe
              src={
                resourceDetail[
                  Math.floor(Math.random() * resourceDetail.length)
                ].url
              }
              title="YouTube video"
              allowFullScreen
              width="100%"
              height="400"
            ></iframe>
          )}
        </div>
        <p
          style={{
            fontSize: "20px",
            padding: " 30px 0px 0px 90px",
            color: "white",
          }}
        >
          <span
            style={{
              backgroundColor: "#FF911E",
              borderRadius: "50px",
              padding: "10px 20px",
              fontWeight: "bold",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            Reference
          </span>
        </p>
        {resourceDetail.map((resource, index) => (
          <p
            style={{
              fontSize: "12px",
              padding: "40px 0px 0px 90px",
              color: "white",
              cursor: "pointer",
            }}
          >
            <a key={index} href={resource.url} target="_blank">
              <span
                style={{
                  backgroundColor: "#314995",
                  borderRadius: "20px 0px 20px 0px",
                  padding: "10px 80px 10px 20px",
                  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
                }}
              >
                {resource.url}
              </span>
            </a>
          </p>
        ))}
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="item item-7">
        <div style={{ padding: " 85px 0px 20px 50px" }}>
          {resourceDetail.map((resource) => (
            <iframe
              key={resource.id}
              src={resource.url}
              title="YouTube video"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="item item-8">
        <div style={{ padding: " 0px 20px 20px 0px" }}>
          <p
            style={{
              fontSize: "20px",
              color: "white",
              marginTop: "50px",
            }}
          >
            <span
              style={{
                backgroundColor: "#FF911E",
                borderRadius: "50px",
                padding: "10px 20px",
                fontWeight: "bold",
                boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              Little quiz
            </span>
          </p>
        </div>
        <div style={{ paddingLeft: "80px" }}>
          {showStartingPage && (
            <StartingPage
              setShowStartingPage={setShowStartingPage}
              setShowQuestionsPage={setShowQuestionsPage}
              topScore={topScore}
              username={username}
              setUsername={setUsername}
            />
          )}
          {showQuestionsPage && (
            <QuestionsPage
              score={score}
              setScore={setScore}
              setShowQuestionsPage={setShowQuestionsPage}
              setShowFinalPage={setShowFinalPage}
            />
          )}
          {showFinalPage && (
            <FinalPage
              score={score}
              topScore={topScore}
              setTopScore={setTopScore}
              setShowStartingPage={setShowStartingPage}
              setShowFinalPage={setShowFinalPage}
              setScore={setScore}
              username={username}
              setUsername={setUsername}
            />
          )}
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="item item-9"></div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="item item-10">
        <p
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            color: "white",
            paddingRight: "20px",
          }}
        >
          How about more pratice?
        </p>
        <button
          style={{
            backgroundColor: "#FF911E",
            borderRadius: "50px",
            padding: "10px 20px",
            fontWeight: "bold",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
            border: "none",
          }}
        >
          <span
            style={{
              color: "white",
            }}
          >
            Click Here
          </span>
        </button>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="item item-11">
        <p
          style={{
            fontSize: "20px",
            padding: " 80px 0px 0px 90px",
            color: "white",
          }}
        >
          <span
            style={{
              backgroundColor: "#FF911E",
              borderRadius: "50px",
              padding: "10px 20px",
              fontWeight: "bold",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            Note
          </span>
        </p>

        <p
          style={{
            fontSize: "20px",
            padding: "30px 90px 0px 90px",
            color: "black",
          }}
        >
          <span
            ref={spanRef}
            style={{
              backgroundColor: "#F2EFE9",
              borderRadius: "50px",
              border: "10px solid #5D70AD",
              padding: "20px",
              display: "inline-block",
              width: "850px",
              height: "250px",
            }}
            contentEditable="true" // This makes the content editable
            onInput={handleInput} // Add the input event listener
          >
            Your text goes here. It can be up to 400 characters.
          </span>
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "50px",
          }}
        >
          <button
            style={{
              backgroundColor: "#FF911E",
              borderRadius: "0px 50px 50px 0px",
              padding: "10px 20px",
              fontWeight: "bold",
              border: "none",
              fontSize: "20px",
            }}
            onClick={goBack}
          >
            <span
              style={{
                color: "white",
              }}
            >
              Back
            </span>
          </button>
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
    </div>
  );
}
