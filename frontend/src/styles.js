import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#364966',
  },
  heading: {
    background: '#364966',
    color: '#fa4454'
  },
  image: {
    marginLeft: '15px',
  },
  box: {
    display: 'flex',
  }
}));