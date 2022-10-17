import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),

    },
  },
  paper: {
    padding: theme.spacing(2),
    background: '#364966',

  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    
  },
  buttonSubmit: {
    marginBottom: 10,
    background: '#fa4454',
    color: 'black',
    fontWeight: 'bold',
    fontFamily: [
      'Valorant',
      'sans-serif',
    ].join(','),
  },
  textField: {
    background: 'white',
    color: 'black',
  },
  valFont: {
    fontFamily: [
      'Valorant',
      'sans-serif',
    ].join(','),
  }
}));