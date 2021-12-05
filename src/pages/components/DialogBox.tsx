import { DialogBoxStyle } from "../../styles/components/DialogBox";

interface Iprops {
  isShow: boolean
}

export default function DialogBox(props: Iprops) {
  if (props.isShow) {
    return(
      <DialogBoxStyle>
        <div className="icon-dialog-box">
          <button className="content-icon-dialog-box">x</button>
        </div>
        <h1 className="name-product">Produto</h1>
        <div className="content-dialog-box">
          <div className="div-content-dialog-box">
            <p>Quantidade em estoque</p>
            <p>1</p>
          </div>
          <div className="div-content-dialog-box">
            <p>Data de fabricação</p>
            <p>20/10/2021</p>
          </div>
          <div className="div-content-dialog-box">
            <p>Data de validade</p>
            <p>20/10/2023</p>
          </div>
        </div>
      </DialogBoxStyle>
    )
  }
  return null;
}

