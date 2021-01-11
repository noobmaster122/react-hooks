import React, { useState } from "react";
import {
  Button,
  Form,
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl,
  Alert,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup
} from "react-bootstrap";
import { wilayas } from "../assets/cities.js";
import { CurrencyHasher } from "../Logic/CurrencyHasher";
import "../styles.css";

export const Formulaire = () => {
  const [buyOrSell, setBuyOrSell] = useState();
  const [transactionOffer, setTransactionOffer] = useState(
    "its supposed to be empty at first"
  );

  // append array values to select input
  let WILAYAS = [];
  WILAYAS = wilayas.map((wilaya, id) => {
    return (
      <option key="{id}" value={wilaya}>
        {" "}
        {wilaya}{" "}
      </option>
    );
  });

  // first section of the forum
  const radios = [
    { name: "بيع", value: "بيع" },
    { name: "شراء", value: "شراء" }
  ];

  // form handler, will check every input by their #ID
  const forumHandler = () => {
    //console.log("forum been submitted");
    let emptyInput = 0;
    let BnS = buyOrSell;
    let chosenCoin = document.getElementById("chosenCurrency").value
      ? document.getElementById("chosenCurrency").value
      : emptyInput++;
    let wantedQuantity = document.getElementById("availabelQuantity").value
      ? document.getElementById("availabelQuantity").value
      : emptyInput++;
    let priceInQuestion = document.getElementById("wantedPrice").value;
    let askingPrice = document.getElementById("wantedPrice").value
      ? document.getElementById("wantedPrice").value
      : emptyInput++;
    let radioChecker = document.getElementById("buyingRadioCheck").checked;
    let buyingRadioInput = document.getElementById("buyingRadioCheck").checked
      ? document.getElementById("buyingRadioCheck").checked
      : emptyInput++;
    let chosenPayMethod = document.getElementById("paymentMethod").value
      ? document.getElementById("paymentMethod").value
      : emptyInput++;
    let chosenCity = document.getElementById("choisenWilaya").value
      ? document.getElementById("choisenWilaya").value
      : emptyInput++;

    // input filter
    if (emptyInput === 1 && radioChecker && isNaN(priceInQuestion)) {
      emptyInput = 0;
    } else if (emptyInput > 0 && !radioChecker && !isNaN(priceInQuestion)) {
      //console.log("youve left radio check empty but filled the number input");
    } else if (emptyInput > 0) {
      //console.log("you've left an empty field");
    }

    // keyword, will change depending of the clients intent (buy/sell)
    let buyOrSellKeyWord;
    let resultedMsg;
    let addPrice = false;

    if (buyOrSell === "بيع") {
      buyOrSellKeyWord = "متعوفر";
      addPrice = true;
    } else if (buyOrSell === "شراء") {
      buyOrSellKeyWord = "مطلعوب";
      addPrice = false;
    }

    // transaction offer text
    resultedMsg = `${buyOrSellKeyWord} : ${CurrencyHasher(chosenCoin)}\n`;
    resultedMsg += `${wantedQuantity} : الكمية\n`;
    resultedMsg += addPrice ? `${askingPrice} : السعر \n` : "";
    resultedMsg += `${CurrencyHasher(chosenPayMethod)}: التعامل ب \n`;
    resultedMsg += `${chosenCity} : الولاية\n`;
    setTransactionOffer(resultedMsg);
    document.getElementById("resultLayer").style.display = "block";
  };

  // overlay sceen copy textarea btn
  const cpyEventHandler = () => {
    /* Get the text field */
    var copyText = document.getElementById("resultedTextROI");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
  };

  // upon exisiting overlayscreen , empty all fields
  const clearInputFields = () => {
    // no need to reset the select fields
    document.getElementById("availabelQuantity").value = "";
    document.getElementById("wantedPrice").value = "";
    document.getElementById("buyingRadioCheck").checked = false;
  };

  return (
    <>
      <Form className="formContainer">
        <h1 className="topHeader">{buyOrSell}</h1>
        <ButtonGroup toggle>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="primary"
              name="radio"
              value={radio.value}
              checked={buyOrSell === radio.value}
              onChange={(e) => {
                //console.log(e.currentTarget.value);
                setBuyOrSell(e.currentTarget.value);
              }}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
        <Form.Group controlId="chosenCurrency">
          <Form.Label>أختر العملة التي تريد</Form.Label>
          <Form.Control as="select">
            <option value="baridimob"> بريدي موب </option>
            <option value="ccp"> ccp</option>
            <option value="flexy"> flexy</option>
            <option value="btc"> بيتكوين/btc</option>
            <option value="eth"> ايثيريوم/eth </option>
            <option value="usdt"> usdt</option>
            <option value="monero"> monero</option>
            <option value="payonner">payonner</option>
            <option value="cartegoogle"> كروت غوغل/google gift card</option>
            <option value="paypal">paypal</option>
            <option value="cashu">Cashu</option>
            <option value="ukashh">ukash</option>
            <option value="perfectmoney">perfect money</option>
            <option value="cartepsn"> psn gift card</option>
            <option value="freefire"> جواهر فري فاير</option>
            <option value="pubg"> شدات بابجي</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="availabelQuantity">
          <Form.Label>أدخل الكمية التي تريد شراء أو بيعها</Form.Label>
          <Form.Control type="number" placeholder="أدخل الأرقام فقط" />
        </Form.Group>
        <Form.Group controlId="wantedPrice">
          <Form.Label>أدخل السعر الدي تريده (د.ج)</Form.Label>
          <Form.Control type="number" placeholder="أدخل الأرقام فقط" />
        </Form.Group>
        <InputGroup>
          <InputGroup.Checkbox
            id="buyingRadioCheck"
            aria-label="Checkbox for following text input"
          />
          <InputGroup.Append className="radioCheckStyle">
            <InputGroup.Text>انا أريد أن أشتري</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <Form.Group controlId="paymentMethod">
          <Form.Label>طرق الدفع التي تريد</Form.Label>
          <Form.Control as="select">
            <option value="baridimob"> بريدي موب </option>
            <option value="ccp"> ccp</option>
            <option value="flexy"> flexy</option>
            <option value="btc"> بيتكوين/btc</option>
            <option value="eth"> ايثيريوم/eth </option>
            <option value="usdt"> usdt</option>
            <option value="monero"> monero</option>
            <option value="payonner">payonner</option>
            <option value="cartegoogle"> كروت غوغل/google gift card</option>
            <option value="paypal">paypal</option>
            <option value="cashu">Cashu</option>
            <option value="ukashh">ukash</option>
            <option value="perfectmoney">perfect money</option>
            <option value="cartepsn"> psn gift card</option>
            <option value="freefire"> جواهر فري فاير</option>
            <option value="pubg"> شدات بابجي</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="choisenWilaya">
          <Form.Label>الولايات التي تتعامل فيها</Form.Label>
          <Form.Control as="select">{WILAYAS}</Form.Control>
        </Form.Group>
        <Button variant="primary" onClick={forumHandler}>
          أنتج النص
        </Button>
      </Form>
      <div className="resultedText" id="resultLayer">
        <div className="resultedTextInnerContainer">
          <h3>عرض البيع/الشراء </h3>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={5}
              id="resultedTextROI"
              className="resultedTextStyle"
              value={transactionOffer}
              readonly
            />
          </Form.Group>

          <Button
            variant="success"
            onClick={forumHandler}
            className="overlayScreenBtn"
            onClick={cpyEventHandler}
          >
            نسخ النص
          </Button>
          <Button
            variant="warning"
            onClick={() => {
              document.getElementById("resultLayer").style.display = "none";
              // clear input fields upon exisiting the overlay screen.
              clearInputFields();
            }}
            className="overlayScreenBtn"
          >
            خروج
          </Button>
        </div>
      </div>
    </>
  );
};
