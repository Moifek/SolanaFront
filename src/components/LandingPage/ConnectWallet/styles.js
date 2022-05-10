import { makeStyles } from "@material-ui/core/styles";
import { dark } from "@material-ui/core/styles/createPalette";
import { MainColor } from '../../../config';


export default makeStyles(()=> ({
      ConnectWalletButton: {
        backgroundColor:MainColor,
        position:'absolute',
        verticalAlign:'middle',
        top: '50%',
        left: '40%',
        margin: '-25px 0 0 -25px',
      }
}));


