<template>
    <div class="nav-bar">
        <v-app-bar color="black" prominent height="fit-content">
            <v-container fluid>
                <v-row style="margin-top: 0px; height: 112px;">
                    <v-col cols="2">
                    </v-col>
                    <v-col cols="2">
                        <div class="parent text-white d-flex justify-space-between align-center">

                            <div class="wishlist d-flex flex-column align-center">

                                <span style="color: white; 
                                padding-top: 20px;
                                 padding-left: 10px; 
                                 line-height: 24px;
                                 font-size: 16px; 
                                 font-weight:600; " class="mt-1">
                                    Home
                                </span>
                            </div>
                            <div class="wishlist d-flex flex-column align-center">

                                <span style="color: white; padding-top: 20px;
                                 padding-left: 10px; 
                                 line-height: 24px;
                                 font-size: 16px; 
                                 font-weight:600;" class="mt-1">
                                    Genre
                                </span>
                            </div>
                            <div class="wishlist  d-flex flex-column align-center " style="cursor:pointer;">
                                <span style="color: white; 
                                 padding-top: 20px;
                                 padding-left: 10px; 
                                 line-height: 24px;
                                 font-size: 16px; 
                                 font-weight:600;">
                                    Country
                                </span>

                            </div>
                        </div>
                    </v-col>
                    <v-col cols="3">
                        <input type="search" name="NavSearch" id="NavSearch" placeholder="search movies........."
                            style="width: 100% ;color:#000000; border-radius:30px; outline:none; margin-top: 14px;"
                            class="py-3 px-5 bg-white" />

                    </v-col>
                    <v-col cols="2">
                        <div class="parent text-white d-flex justify-space-between align-center">

                            <div class="wishlist d-flex flex-column align-center">

                                <span style="color: white;
                                 padding-top: 20px;
                                 padding-left: 10px; 
                                 line-height: 24px;
                                 font-size: 16px; 
                                 font-weight:600;" 
                                 class="mt-1">
                                    Movies
                                </span>
                            </div>
                            <div class="wishlist d-flex flex-column align-center">

                                <span style="color: white;
                                 padding-top: 20px;
                                 padding-left: 10px; 
                                 line-height: 24px;
                                 font-size: 16px; 
                                 font-weight:600;" class="mt-1">
                                    Series
                                </span>
                            </div>
                            <div class="wishlist  d-flex flex-column align-center " style="cursor:pointer;">


                                <span style="color: white; padding-top: 20px;
                                 padding-left: 10px; 
                                 line-height: 24px;
                                 font-size: 16px; 
                                 font-weight:600;">
                                    Animation
                                </span>

                            </div>
                        </div>
                    </v-col>
                    <v-col cols="2">
                        <div class="parent text-white d-flex justify-space-between align-center">

                            <v-btn class="py-2 px-6" style="text-transform: none;
                                 border-radius: 30px; margin-top: 15px;
                                  padding-left: 10px; 
                                 line-height: 24px;
                                 font-size: 16px; 
                                 font-weight:600; "> Login/Singup
                                <div style="display: inline-block; margin-left: 13px;
height: 19px;">
                                    <img src="../../assets/images/x.svg" alt="" width="20" height="20"
                                        style="border-radius: 50%;">



                                </div>
                            </v-btn>

                        </div>
                    </v-col>
                    <v-col cols="1">

                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>
    </div>
</template>
