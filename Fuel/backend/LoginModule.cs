using System;
using System.Collections.Generic;
using System.Text;

namespace Fuel_group22
{
    class LoginModule
    {
        private string fullname;
        private string address1;
        private string address2;
        private string city;
        private string state;
        private string zipcode;
        private string username;
        private string password;
        private string reenter;

        public void CheckFullname(string fullname)
        {
            bool confirmName = fullname.Length <= 50;
            if (confirmName == false)
            {
                Console.WriteLine("Full name exceeds character limit.");
            }

        }

        public void CheckAddress1(string address1)
        {
            bool confirmA1 = address1.Length <= 50;
            if (confirmA1 == false)
            {
                Console.WriteLine("Address line 1 exceeds character limit.");
            }
        }

        public void CheckAddress2(string address2)
        {
            bool confirmA2 = address2.Length <= 50;
            if (confirmA2==false)
            {
                Console.WriteLine("Address line 2 exceeds character limit.");
            }
        }

        public void CheckCity(string city)
        {
            bool confirmCity = city.Length <= 100;
            if (confirmCity == false)
            {
                Console.WriteLine("City exceeds character limit.");
            }
        }

        public void CheckState(string state)
        {
            bool confirmState = state.Length <= 2;
            if (confirmState == false)
            {
                Console.WriteLine("State exceeds character limit.");
            }
        }

        public void CheckZip(string zipcode)
        {
            bool confirmZip = zipcode.Length <= 9 && zipcode.Length>5;
            if (confirmZip == false)
            {
                Console.WriteLine("Zipcode does not meet character limit.");
            }
        }

        public void CheckUsername(string username)
        {
            bool confirmUsername = username.Length <= 50;
            if (confirmUsername == false)
            {
                Console.WriteLine("Username exceeds character limit.");
            }
        }

        public void CheckPass(string password)
        {
            bool confirmPass = password.Contains("password");
            if(confirmPass==true)
            {
                Console.WriteLine("Password should not contain the word password.");
            }
        }

        public void CheckRe(string reenter)
        {
            bool confirmReenter = reenter == password;
            if(confirmReenter==false)
            {
                Console.WriteLine("Passwords do not match.");
            }
        }
    }
        
}
