import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { getPositiveIntegerUnderMax } from "../../utils/number";
import "./Home.scss";

export function Home() {
  const [radioValue, setRadioValue] = useState("up");
  const [amountValue, setAmountValue] = useState("");
  const onCountType = (e: ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value);
  };

  const onAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmountValue(getPositiveIntegerUnderMax(value, 10000, ""));
  };

  const onAmountHelperClick = (value: number) => {
    setAmountValue(value.toLocaleString() + "");
  };

  return (
    <section className="home">
      <h1 className="title">
        Fake It <br />
        Until
        <br />
        You Make It
      </h1>

      <div className="count-buttons">
        <div className="count-buttons__container">
          <label className="count-up count-button">
            <input
              name="count"
              type="radio"
              value="up"
              checked={radioValue === "up"}
              onChange={onCountType}
            />
            Count <br /> up
          </label>
          <label className="count-down count-button">
            <input
              name="count"
              type="radio"
              value="down"
              checked={radioValue === "down"}
              onChange={onCountType}
            />
            Count down
          </label>
          <div
            className={`selectedBackground ${
              radioValue === "up" ? "up" : "down"
            }`}
          />
        </div>
      </div>

      <input
        className="box amount"
        type="text"
        onChange={onAmountChange}
        placeholder={"Please input amount..."}
        value={amountValue}
      />

      <div className="amount__helpers">
        <div className="amount__helpers__container">
          {HELPER_TYPES.map((type) => (
            <button
              key={type}
              className="button button--middle helper"
              onClick={() => onAmountHelperClick(type)}
            >
              {type}
            </button>
          ))}
          {radioValue === "up" && (
            <button
              className="button button--middle helper"
              onClick={() => setAmountValue("INFINITY")}
            >
              INFINITY
            </button>
          )}
        </div>
      </div>
      <div className="start">
        <Link to={`/cards`} className="button button--big">
          START
        </Link>
      </div>
    </section>
  );
}

const HELPER_TYPES = [1000, 500, 100, 10];
