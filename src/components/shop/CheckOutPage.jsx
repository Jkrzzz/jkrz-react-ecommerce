import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import "../modal.css";
import { useLocation, useNavigate } from "react-router-dom";

const CheckOutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa");

  const handleChange = (tabId) => {
    setActiveTab(tabId);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const location = useLocation();
  const navigate = useNavigate();
  const form = location.state?.form?.pathname || "/";
  const handleOrderConfirm = () => {
    alert("Your order is placed successfully!");
    localStorage.removeItem("cart");
    navigate(form, { replace: true });
  };

  return (
    <div className="modalCard">
      <Button variant="primary" onClick={handleShow} className="py-2">
        Processed to Checkout
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modal fade"
        centered
      >
        <div className="m-5">
          <h5 className="px-3 mb-3">Select Your Payment Method</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      href="#visa"
                      className={`nav-link ${
                        activeTab === "visa" ? "active" : ""
                      }`}
                      id="visa-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="visa"
                      aria-selected={activeTab === "visa"}
                      onClick={() => handleChange("visa")}
                    >
                      <img
                        src="https://i.imgur.com/sB4jftM.png"
                        alt=""
                        width={80}
                      />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      href="#paypal"
                      className={`nav-link ${
                        activeTab === "paypal" ? "active" : ""
                      }`}
                      id="paypal-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="paypal"
                      aria-selected={activeTab === "paypal"}
                      onClick={() => handleChange("paypal")}
                    >
                      <img
                        src="https://i.imgur.com/yK7EDD1.png"
                        alt=""
                        width={80}
                      />
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className={`tab-pane fade ${
                      activeTab === "visa" ? "show active" : ""
                    }`}
                    id="visa"
                    role="tabpanel"
                    aria-labelledby="visa-tab"
                  >
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Credit card </h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            required
                          />
                          <span>Cardholder Name </span>
                        </div>
                        <div className="inputbox">
                          <input
                            type="number"
                            name="number"
                            id="number"
                            min="1"
                            max="999"
                            className="form-control"
                            required
                          />
                          <span>Card Number </span>{" "}
                          <i className="fa fa-eye"></i>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="inputbox">
                            <input
                              type="number"
                              name="number"
                              id="number"
                              min="1"
                              max="999"
                              className="form-control"
                              required
                            />
                            <span>Expiration Date </span>
                          </div>
                          <div className="inputbox">
                            <input
                              type="number"
                              name="number"
                              id="number"
                              min="1"
                              max="999"
                              className="form-control"
                              required
                            />
                            <span>CVV </span>
                          </div>
                        </div>
                        <div className="px-5 pay">
                          <button
                            className="btn btn-success btn-block"
                            onClick={handleOrderConfirm}
                          >
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-3 px-4 p-Disclaimer">
                  <em>Payment Discliamer:</em> In no event shall payment or
                  partial payment by Owner for any material or service
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckOutPage;
