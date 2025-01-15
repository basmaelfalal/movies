<template>
    <div class="recently-updated">
        <v-container>
            <v-row>
                <v-col cols="4">
                    <h3 class="text-trending">Trending</h3>
                </v-col>
                <v-col cols="7"></v-col>
                <v-col cols="1">
                    <v-btn class="view" elevation="0">View all
                        <img src="../../assets/images/Vector5.svg" alt="" width="22px" height="20px">
                    </v-btn>

                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4">
                    <v-card class="gr-card">
                        <v-img src="../../assets/images/Rectangle 3.png" class="gr-img" alt="">
                            <v-toolbar color="transparent">
                                <template v-slot:prepend>
                                    <v-chip elevation="0" variant="outlined" style="color: white; border: none;" >
                                        <img src="../../assets/images/Vector8.svg" alt="" width="15px" height="20px"
                                          style="margin-right: 3px;"  >
                                        3:12:00
                                    </v-chip>
                                </template>


                                <template v-slot:append>
                                    <v-chip elevation="0" variant="outlined" style="color: white; border: none;">
                                        <img src="../../assets/images/Vector75.svg" alt="" width="17px" height="23px"
                                        style="margin-right: 3px;">0.8
                                    </v-chip>
                                </template>
                            </v-toolbar></v-img>
                        <v-row>
                            <v-col cols="6">
                                <h3 class="text-medellin">Medellin</h3>
                            </v-col>
                            <v-col cols="6">
                                <v-row>
                                    <v-col cols="6">
                                        <v-chip class="action" elevation="0">Action

                                        </v-chip>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-chip class="action" elevation="0">Comedy

                                        </v-chip>

                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card class="gr-card">
                        <v-img src="../../assets/images/Rectangle 4.png" class="gr-img" alt="">
                            <v-toolbar color="transparent">
                                <template v-slot:prepend>
                                    <v-chip elevation="0" variant="outlined" style="color: white; border: none;">
                                        <img src="../../assets/images/Vector8.svg" alt="" width="15px" height="20px"
                                          style="margin-right: 3px;"  >
                                        3:12:00
                                    </v-chip>
                                </template>


                                <template v-slot:append>
                                    <v-chip elevation="0" variant="outlined" style="color: white; border: none;">
                                        <img src="../../assets/images/Vector75.svg" alt="" width="17px" height="23px"
                                        style="margin-right: 3px;">0.8
                                    </v-chip>
                                </template>
                            </v-toolbar></v-img>
                        <v-row>
                            <v-col cols="4">
                                <h3 class=" text-fast">Fast X</h3>
                            </v-col>
                            <v-col cols="8">
                                <v-row>
                                    <v-col cols="4">
                                        <v-chip class="action" elevation="0">Action

                                        </v-chip>
                                    </v-col>
                                    <v-col cols="4">
                                        <v-chip class="action" elevation="0">Crime

                                        </v-chip>
                                        

                                    </v-col>
                                    <v-col cols="4">
                                        <v-chip class="action" elevation="0">Thriller

                                        </v-chip>
                                        

                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card class="gr-card">
                        <v-img src="../../assets/images/Rectangle 5.png" class="gr-img" alt="">
                            <v-toolbar color="transparent">
                                <template v-slot:prepend>
                                    <v-chip elevation="0" variant="outlined" style="color: white; border: none;">
                                        <img src="../../assets/images/Vector8.svg" alt="" width="15px" height="20px"
                                          style="margin-right: 3px;"  >
                                        3:12:00
                                    </v-chip>
                                </template>


                                <template v-slot:append>
                                    <v-chip elevation="0" variant="outlined" style="color: white; border: none;">
                                        <img src="../../assets/images/Vector75.svg" alt="" width="17px" height="23px"
                                        style="margin-right: 3px;">0.8
                                    </v-chip>
                                </template>
                            </v-toolbar></v-img>
                        <v-row>
                            <v-col cols="6">
                                <h3 class="text-treending">The Black Dem...</h3>
                            </v-col>
                            <v-col cols="6">
                                <v-row>
                                    <v-col cols="6">
                                        <v-chip class="action" elevation="0">Horror

                                        </v-chip>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-chip class="action" elevation="0">Thriller

                                        </v-chip>

                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>



        </v-container>
    </div>




</template>
