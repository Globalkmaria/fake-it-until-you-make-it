import React from "react";
import { LanguageAndTextPairs, LanguageAndComponentPairs } from "./type";

export const GoalTextareaHelper: LanguageAndTextPairs = {
  KR: "여기에 목표를 작성해주세요...",
  EN: "Please write your goal here...",
};

export const GoBackHomeText: LanguageAndTextPairs = {
  KR: "홈으로 돌아가기",
  EN: "Go back home",
};

function KRCongratsMessage() {
  return <div>모두 완료했습니다!</div>;
}

function ENCongratsMessage() {
  return (
    <div>
      Great!
      <br />
      You did it!
    </div>
  );
}

export const CongratsMessage: LanguageAndComponentPairs = {
  KR: KRCongratsMessage,
  EN: ENCongratsMessage,
};

export const KeepTextMessage: LanguageAndTextPairs = {
  KR: "글을 유지하시겠습니까?",
  EN: "Do you want to keep the text?",
};
