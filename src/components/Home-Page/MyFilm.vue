<template>

    <div class="my-film">
        <v-container>
            <v-row>
                <v-col cols="4">
                    <img src="../../assets/images/Rectangle 10.png" class="film-img" alt="" height="641px"
                        width="352px">
                </v-col>
                <v-col cols="8">
                    <v-row>
                        <v-col cols="4">
                            <h1 class="text-silo">
                                Silo
                            </h1>
                        </v-col>
                        <v-col cols="4"></v-col>
                        <v-col cols="4">
                            <v-btn class="favourite" size="x-large">
                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17 8.43333V9.56667H9.06667V17.5H7.93333V9.56667H0V8.43333H7.93333V0.5H9.06667V8.43333H17Z"
                                        fill="white" />
                                </svg>

                                Add to Favourite

                            </v-btn>
                        </v-col> </v-row>
                    <v-row>
                        <v-col cols="10">
                           
                            <v-btn class="btn-option" size="x-large" density="compact">Drama</v-btn>
                            <v-btn class="btn-option" size="x-large" density="compact">Science Fiction</v-btn>
                            <v-chip class="icon-time" variant="outlined" elevation="0"> <img
                                    src="../../assets/images/Group.svg" alt="" width="15px" height="20px"
                                    style=" padding-bottom: 4px;">2023</v-chip>
                            <v-chip class="icon-time" variant="outlined" elevation="0"> <img
                                    src="../../assets/images/Vector8.svg" alt="" width="15px" height="20px"
                                    style=" padding-bottom: 4px;">3:12:00</v-chip>
                            <v-chip elevation="0" variant="outlined"
                                style="color: white; border: none; margin-top: 50px;">
                                <img src="../../assets/images/Vector75.svg" alt="" width="17px" height="23px"
                                    style="margin-right: 3px;">8.5
                            </v-chip>
                        </v-col>
                    </v-row>
                    <v-row>
                        <div class="text-left text-film">
                            <h3>
                                In a ruined and toxic future, a community exists in a giant underground silo that
                                plunges
                                hundreds of stories deep. There, men and women live in a society full of regulations
                                they
                                believe are meant to protect them.
                            </h3>
                        </div>
                    </v-row>

                    <div class="text-left contant">
                        <h3>
                            Country : United States
                        </h3>

                    </div>



                    <div class="text-left text-contant">
                        <h3>
                            Genre : Drama, Science Fiction
                        </h3>
                    </div>

                    <div class="text-left text-data">
                        <h3>
                            Date Release : May 05 2023
                        </h3>
                    </div>

                    <div class="text-left production">
                        <h3>
                            Production : AMC Studios
                        </h3>
                    </div>

                    <div class="text-left text-contant">
                        <h3>
                            Cast : Tim Robbins, Rebecca Ferguson, Avi Nash, Rashida Jones, David Oyewolo, Tim
                            Robbins
                        </h3>
                    </div>

                </v-col>
            </v-row>
        </v-container>
    </div>


</template>