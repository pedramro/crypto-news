import useStyles from './Styles';
import News from '../../components/news/News';


function Home() {
  const classes = useStyles()
  return (
    <div className={classes.hl}>
      <News />
    </div>
  )
}

export default Home