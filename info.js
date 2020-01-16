var info = document.getElementById("getInToucheModal");
info.insertAdjacentHTML("afterbegin",` <div class="modal-dialog" role="document">
<div class="modal-content">
    <div class="overlay">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" class="icon-cross"></span>
        </button>
        <div class="modal-body">
            <!--contact info-->
            <div class="float-left">
                <h4>Get more info</h4>
                <p>We are open for any suggestion.</p>
                <hr>
                <ul class="contact-info-modal">
                    <li>
                        <p><span class="icon-phone-wave"></span>
                            <strong>Call Us</strong></p>
                        <span>+91 89205 11882</span>
                    </li>
                    <li>
                        <p> <span class="icon-at-sign"></span>
                            <strong>Mail Us</strong></p>
                        <span>codingworld1972@gmail.com</span>
                    </li>
                    <li>
                        <p><span class="icon-map-marker"></span>
                            <strong>Address</strong></p>
                        <span>Palam Colony New Delhi (INDIA)</span>
                    </li>
                </ul>
            </div>
            <!--end contact info-->
            <!--contact form section-->
            <div class="float-left green-bg">
                <form id="getAQuoteForm" class="validation-form">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="input-group">
                                <span class="input-group-addon icon-user" id="getAqut-name"></span>
                                <input type="text" class="form-control white-ph" placeholder="Your name" aria-label="GetAqname" name="GetAQutName">
                            </div>
                            <div class="input-group">
                                <span class="input-group-addon icon-envelope" id="getAqut-email-address"></span>
                                <input type="text" class="form-control white-ph" placeholder="Your E-mail" aria-label="email-address" name="GetAQutEmail">
                            </div>
                            <div class="input-group">
                                <span class="input-group-addon icon-laptop" Id="getAqut-web-address"></span>
                                <input type="text" class="form-control white-ph" placeholder="Your Website URL" aria-label="web-address"  name="GetAQutUrl">
                            </div>
                            <div class="input-group">
                                <textarea class="form-control white-ph" placeholder="Type Your Message" aria-label="getAqut-Message-address"  name="GetAQutMsg"></textarea>
                            </div>
                            <div class="input-group">
                                <input type="Submit" class="form-control btn white-btn-lg" value="Submit" >
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <!--end contact form section-->
            <div class="clearfix"></div>
        </div>
    </div>
</div>
</div>`);