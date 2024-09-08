import { GraphQLResolveInfo } from 'graphql';
import supabase from './supabaseClient';



interface Context {}
interface ArgsUser {
  id: string;
}
interface ArgsUpdateUserCoins {
  id: string;
  coins: number;
}
interface ArgsCreateUser {
  id: string;
  username: string;
  coin_balance: number;
}

const resolvers = {
  Query: {
    user: async (_: any, args: ArgsUser, context: Context, info: GraphQLResolveInfo) => {
      const { id } = args;
      console.log('ididid',id)
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', id)
        .maybeSingle();
      if (error) throw new Error(error.message);
      console.log(data);
      return data;
    },
    getUserCoins: async (_: any, args: ArgsUser, context: Context, info: GraphQLResolveInfo) => {
      const { id } = args;
      console.log('Fetching coin balance for user with id:', id);
      const { data, error } = await supabase
        .from('users')
        .select('coin_balance')
        .eq('id', id)
        .maybeSingle();
      if (error) throw new Error(error.message);
      return data ? data.coin_balance : null;
    },
  },
  Mutation: {
    createUser: async (_: any, args: ArgsCreateUser) => {
      const { id, username, coin_balance } = args;
      const { data, error } = await supabase
        .from('users')
        .insert([{ id, username, coin_balance }])
        .single();
      if (error) {
        console.error('Error creating user:', error.message);
        throw new Error(error.message);
      }
      console.log('Inserted user data:', data);
      return data;
    },
    updateUserCoins: async (_: any, args: ArgsUpdateUserCoins) => {
      const { id, coins } = args;
      console.log('Updating user with id:', id, 'and coins:', coins); 
  
      const { data: userData, error: fetchError } = await supabase
        .from('users')
        .select('coin_balance')
        .eq('id', id)
        .single();
  
      if (fetchError) {
        console.error('Error fetching user data:', fetchError.message);
        throw new Error(fetchError.message);
      }
  
      if (!userData) {
        console.error('User not found');
        throw new Error('User not found');
      }
  
      const currentBalance = userData.coin_balance;
  
      const { data, error } = await supabase
        .from('users')
        .update({ coin_balance: coins })
        .eq('id', id)
        .single();
  
      if (error) {
        console.error('Error updating user:', error.message);
        throw new Error(error.message);
      }
      console.log('Updated user data:', data);
      return data;
    },
    
  },
};


export default resolvers;
