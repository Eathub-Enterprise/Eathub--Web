import React from "react";
import icon from "../../../../Assets/pngs/ImgUpload.png";

const AddMenu = () => {
  return (
    <div className="menu-section">
      <form action="">
        <div className="menu-title">
          <div className="menu-title-header">
            <h2>Add Meal</h2>
          </div>
          <button className="menu-btn">Save Meal</button>
        </div>
        <div className="menu-table">
          <div className="menu-table-inner">
            <div className="menu-table-row">
              <div className="menu-input">
                <label>
                  <h4>CATEGORIES</h4>
                </label>
                <select name="categories">
                  <option value="categories">African</option>
                  <option value="categories">Continental</option>
                  <option value="categories">Snacks</option>
                  <option value="categories">Thai</option>
                </select>
              </div>

              <div className="menu-input">
                <label>
                  <h4>NAME</h4>
                </label>
                <input type="text" placeholder="Name" />
              </div>

              <div className="menu-input">
                <label>
                  <h4>PRICE (NGN)</h4>
                </label>
                <input type="digit" placeholder="Price" />
              </div>

              <div className="menu-input-img">
                <h4>Import Food Images</h4>
                <div className="labels">
                  <label htmlFor="Image">
                    {/* sucessful display fix */}
                    <input
                      id="Image"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                    ></input>
                    <label htmlFor="Image">
                      <img src={icon} alt={icon} className="menu-inputImg" />
                    </label>
                  </label>
                  <label htmlFor="Image">
                    <input
                      type="file"
                      id="Image"
                      accept="image/*"
                      style={{ display: "none" }}
                    ></input>
                    <label htmlFor="Image">
                      <img src={icon} alt={icon} className="menu-inputImg" />
                    </label>
                  </label>
                  <label htmlFor="Image">
                    <input
                      id="Image"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                    ></input>
                    <label htmlFor="Image">
                      <img src={icon} alt={icon} className="menu-inputImg" />
                    </label>
                  </label>
                </div>
                <label>
                  <p className="menu-small">Image should be 2mb max</p>
                </label>
              </div>
            </div>
            <div className="menu-table-row second">
              <div className="menu-input">
                <label>
                  <h4>DESCRIPTION</h4>
                </label>
                <textarea placeholder="Meal Description"></textarea>
              </div>

              <div className="menu-input">
                <label>
                  <h4>PREPARATION TIME (minutes)</h4>
                </label>
                <input type="digit" placeholder="Preparation Time" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMenu;
