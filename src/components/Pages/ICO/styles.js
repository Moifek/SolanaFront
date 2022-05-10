import { makeStyles } from "@material-ui/core/styles";
import { SecondaryColor, MainColor } from '../../../config.js';

export default makeStyles(()=> ({
    MainBlock: {
        position:'relative',
        height:'800px',
      },
      Title: {
        position:'relative',
        height:'60px',
        width:'975px',
      },
      MainFunction: {
        position:'relative',
        alignSelf:'center',
        verticalAlign:'middle',
        height:'350px',
        width:'40%',
        backgroundColor:'#C4C4C4',
        bottom:'20%',
      },
      Container:{
        position:'relative',
        height:'275px',
        width:'80%',
      },
      FirstLine:{
        position:'relative',
        height:'60px',
        top:'50%',
        width:'90%',
      },
      SecondLine:{
        width:'90%',
        position:'relative',
        height:'200px',
      },
      MenuText: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Merriweather Sans',
        fontSize: '23px',
        fontWeight: '800',
        lineHeight: '28px',
        letterSpacing: '0.04em',
        color: '#000000',
      },
      Price: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Merriweather Sans',
        fontSize: '23px',
        fontWeight: '800',
        lineHeight: '28px',
        letterSpacing: '0.04em',
        color: '#938862',
      },
      Title:{
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Merriweather Sans',
        fontSize: '34px',
        fontWeight: '800',
        lineHeight: '28px',
        letterSpacing: '0.04em',
        color: '#F6EFE2',
      },
      ButtonSecondaryColor: {
        backgroundColor:SecondaryColor,
      }
}));


