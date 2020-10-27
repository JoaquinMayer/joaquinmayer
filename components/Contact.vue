<template>
  <!-- Contact Section Starts -->
            <section>
				<!-- Contact Title Starts -->
                <div class="bl-box valign-wrapper">
                    <div class="page-title center-align">
                        <span class="title-bg">Contacto</span>
                        <h2 class="center-align">
                            <span data-hover="¡charlemos!">¡Charlemos!</span>
                            <span data-hover="🤟">🤙</span>
                        </h2>
                    </div>
                </div>
				<!-- Contact Title Ends -->
                <!-- Expanded Contact Starts -->
                <div class="bl-content">
                    <!-- Main Heading Starts -->
                    <div class="container page-title center-align">
                        <h2 class="center-align">
                            <span data-hover="¡charlemos!">¡Charlemos!</span>
                            <span data-hover="🤟">🤙</span>
                        </h2>
						<span class="title-bg">Contacto</span>
                    </div>
                    <!-- Main Heading Ends -->
                    <div class="container">
                        <!-- Divider Starts -->
                        <div class="divider center-align">
                            <span class="outer-line"></span>
                            <span class="fa fa-envelope-open" aria-hidden="true"></span>
                            <span class="outer-line"></span>
                        </div>
                        <!-- Divider Ends -->
                        <div class="row contact">
							<!-- Contact Infos Starts -->
                            <div class="col s12 m5 l3 xl3 leftside">
								<!-- Contacts Starts -->
								<h6 class="font-weight-500 uppercase">Email</h6>
								<span class="font-weight-400 second-font"><i class="fa fa-envelope"></i><a href="mailto:joaquinemayer@gmail.com" target="_blank">joaquinemayer@gmail.com</a></span>
								<h6 class="font-weight-500 uppercase">Ubicación</h6>
								<span class="font-weight-400 second-font"><i class="fa fa-home"></i>  Montevideo, Uruguay</span><br>
								<!-- Contacts Ends -->
								<!-- Social Media Profiles Starts -->
                                <h6 class="font-weight-500 uppercase">¡Seguime!</h6>
                                <div class="social">
                                    <ul class="list-inline social social-intro center-align p-none">
                                        <li class="github"><a href="https://github.com/JoaquinMayer" target="_blank"><i class="fa fa-github" ></i></a></li>
                                        <li class="linkedin"><a href="https://www.linkedin.com/in/joaquinmayer/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
								<!-- Social Media Profiles Ends -->
                            </div>
							<!-- Contact Infos Ends -->
							<!-- Contact Form Starts -->
                            <div class="col s12 m7 l9 xl9 rightside">
								<h6 class="uppercase m-none">Entablemos una conversación 🤟</h6>
								<div class="row">
									<p class="col s12 m12 l7 xl7 second-font">
										Gracias por llegar hasta aqui.<br> Cualquier consulta, proyecto o si simplemente queres saludar, no dudes en hablarme.
									</p>
								</div>
                                <form class="contactform" name="contact" method="POST" data-netlify="true">
                                    <!-- Name Field Starts -->
                                    <div class="input-field second-font">
                                        <i class="fa fa-user prefix"></i>
                                        <input id="name" name="name" type="text" class="validate" required>
                                        <label class="font-weight-400" for="name">Nombre</label>
                                    </div>
                                    <!-- Name Field Ends -->
                                    <!-- Email Field Starts -->
                                    <div class="input-field second-font">
                                        <i class="fa fa-envelope prefix"></i>
                                        <input id="email" type="email" name="email" class="validate" required>
                                        <label for="email">Email</label>
                                    </div>
                                    <!-- Email Field Ends -->
                                    <!-- Start Message Textarea Starts -->
                                    <div class="input-field second-font">
                                        <i class="fa fa-comments prefix"></i>
                                        <textarea id="message" name="message" class="materialize-textarea" required></textarea>
                                        <label for="message">Mensaje</label>
                                    </div>
                                    <!-- Message Textarea Ends -->
									<!-- Submit Form Button Starts -->
                                    <div class="col s12 m12 l4 xl4 submit-form">
                                        <button class="btn font-weight-500" type="submit" name="send">
											Enviar Mensaje <i class="fa fa-send"></i>
										</button>
                                    </div>
                                    <!-- Submit Form Button Ends -->
                                    <div class="col s12 m12 l8 xl8 form-message">
                                        <span class="output_message center-align font-weight-500 uppercase"></span>
                                    </div>
                                </form>
                            </div>
                            <!-- Contact Form Ends -->
                        </div>
                    </div>
                </div>
                <!-- Expanded Contact Ends -->
                <img alt="close" src="images/close-button.png" class="bl-icon-close" />
            </section>
            <!-- Contact Section Ends -->
</template>