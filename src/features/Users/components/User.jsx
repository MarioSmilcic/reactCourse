import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import "../../Users/User.css";

const User = ({
  name,
  imgUrl,
  position,
  email,
  WalletsBallance,
  IncomeAmounts,
  TotalTransactions,
}) => {
  return (
    <div className="user">
      <img src={imgUrl} />
      <p>{name}</p>
      <div className="positionEmail">
        <p>{`@${position}`}</p>
        <p>|</p>
        <Link>{email}</Link>
      </div>
      <Button buttonText="Message Now" color="#1877F2" />
      <div className="statistics">
        <div className="statisticItem">
          <p>Wallets Ballance</p>
          <p>{WalletsBallance}</p>
        </div>
        <div className="statisticItem">
          <p>Income Amounts</p>
          <p>{IncomeAmounts}</p>
        </div>
        <div className="statisticItem">
          <p>Total Transactions</p>
          <p>{TotalTransactions}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
