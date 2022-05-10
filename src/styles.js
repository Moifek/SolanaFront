import { makeStyles } from "@material-ui/core/styles";
import { SecondaryColor } from './config';

export default makeStyles(()=> ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
      },
      image: {
        marginLeft: '15px',
        marginRight: '15px',
      },
      neonLine:{
        position:'absolute',
        top:'12%',
        width:'87%',
        left:'12%',
      },
      MenuText: {
        position: 'absolute',
        bottom: '30px',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Merriweather Sans',
        fontSize: '25px',
        fontWeight: '800',
        lineHeight: '28px',
        letterSpacing: '0.04em',
        textAlign: 'center',
        color: '#FFFFFF',
      },
      MenuButton: {
        position: 'relative',
        marginLeft: 'auto',
        marginRight: 'auto',
        width:'10%',
      },
      ConnectWalletButton: {
        backgroundColor:SecondaryColor,
      }
}));


