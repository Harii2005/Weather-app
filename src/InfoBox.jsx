import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'

export default function InfoBox({info}){
    let Rain_URL ="data:image/jpeg;base64,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"

    let HOT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVBk_xeHS68u22V2rDpV8S1m7qcoSunF8pmA&s"

    let COLD_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQO9dKiYg0LpJPk8hSdBlet5y0EauwUgQxZw&s"
    // let info = {
    //     city : "delhi",
    //     feelslike: 24.84,
    //     temp: 25.05,
    //     tempMin: 25.05,
    //     tempMax: 25.05,
    //     humidity: 47,
    //     weather: "haze",
    // };
    return(
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80
                                ? Rain_URL 
                                : info.temp < 25 ? COLD_URL : HOT_URL
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div">
                            <div> temp : {info.temp}&deg;C </div>
                            <div> tempMin : {info.tempMin}&deg;C </div>
                            <div> tempMax : {info.tempMax}&deg;C </div>
                            <div> Humidity : {info.humidity} </div>
                            <div> The weather can be described as <b>{info.weather}</b> and feels like {info.feelslike}&deg;C</div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}