import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { setAmountItems } from '../../../../store/amountItemsPerPage/amountItemsPerPage';

export const AmountItemsPerPage = (): JSX.Element => {
  const amount = useSelector(
    (state: RootState) => state.amountItemsOnPage.amount
  );
  const dispatch = useDispatch();

  const handleAmountItems = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const { value } = event.target;
    dispatch(setAmountItems(+value));
  };

  return (
    <select
      defaultValue={amount}
      className="top-section__change-amount"
      onChange={handleAmountItems}
    >
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
    </select>
  );
};
