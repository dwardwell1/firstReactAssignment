const Tweet = ({username, name, date,message}) => (
    <ul>
        <li><b>{username}</b></li>
        <li>{name}</li>
        <li>{date}</li>
        <li>{message}</li>
    </ul>
)