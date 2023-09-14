import { replaceCart } from "./ExpenseSlice";

export const fetchCartData = () => {
    return async (dispatch) => {
      const fetchData = async () => {
        const response = await fetch(
          'https://expensetracker011-default-rtdb.firebaseio.com/expenses.json'
        );
  
        if (!response.ok) {
          throw new Error('Could not fetch cart data!');
        }
  
        const data = await response.json();
  
        return data;
      };
  
      try {
        const cartData = await fetchData();
        dispatch(
          replaceCart({
            expenses: cartData.expenses || [],
            total: cartData.total,
          })
        );
      } catch (error) {
        alert(error)
      }
    };
  };

    export const sendCartData = (cart) => {
        return async (dispatch) => {
          
      
          const sendRequest = async () => {
            const response = await fetch(
              'https://expensetracker011-default-rtdb.firebaseio.com/expenses.json',
              {
                method: 'PUT',
                body: JSON.stringify({
                  expenses: cart.expenses,
                  total: cart.total,
                }),
              }
            );
      
            if (!response.ok) {
              throw new Error('Sending cart data failed.');
            }
          };
      
          try {
            await sendRequest();
      
          
          } catch (error) {
            alert(error)
          }
        };
      };