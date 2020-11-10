"use strict";

var language = {
        TW: {
                // < !--登录界面-- >
                lp_login_activity_text1: "選擇登錄方式",
                lp_login_activity_cs_text: "聯絡客服",
                lp_login_activity_facebook_text: "facebook",
                lp_login_activity_sw_text: "試玩",
                lp_login_activity_pt_text: "平台登錄",
                lp_login_activity_google_text: "google",
                lp_login_activity_xieding: "商業協定",
                lp_login_activity_yinsi: "隱私政策",
                lp_login_activity_version: "版本",
                lp_login_activity_tip_title: "公告",
                lp_login_activity_but_enter: "進入遊戲",
                // <
                // !--切换账号界面-- >
                lp_sdk_login_activity_tips_msg: "正在登錄",
                lp_sdk_login_activity_tips_switch_msg: "切換賬號",

                // < !--账号登录界面-- >
                lp_platform_login_activity_login_title: "賬號登錄",
                lp_platform_login_activity_retrieve_password_txt: "忘記密碼 ?",
                lp_platform_login_activity_btn_enter: "登錄",
                lp_platform_login_activity_register: "點我註冊賬號",
                lp_platform_login_activity_account_manager: "賬號管理",
                lp_platform_login_activity_login_hint_password: "密碼",
                lp_platform_login_account_hint: "賬號（郵箱/手機號碼）",

                // <
                // !--注册界面-- >
                lp_register_activity_register_txt: "賬號註冊",
                lp_register_activity_agree_rule: "同意會員服務",
                lp_register_activity_rule_manage: "《會員管理規章》",
                lp_register_activity_register_but: "註 冊",
                lp_register_activity_hint_username: "賬號：手機號/Email",
                lp_register_activity_hint_password: "密碼",
                lp_register_activity_hint_reppassword: "重複密碼",
                lp_register_activity_hint_email: "Email(可用於找回密碼)",

                // < !--找回密码界面-- >
                lp_retrieve_password_activity_title: "忘記密碼 ?",
                lp_retrieve_password_activity_hint_acc: "賬號",
                lp_retrieve_password_activity_hint_email: "註冊Email",
                lp_retrieve_password_activity_retrieve_pwd: "找回密碼",

                // <!--平台登陆提示-- >
                lp_login_code_account_empty: "登錄賬號不為空",
                lp_login_code_password_empty: "登錄密碼不為空",
                lp_login_code_checkaccount: "賬號只能是3-32位數字或字母（區分大小寫）開頭+數字字母的郵箱，\n及3-32位數字組成的手機號",
                lp_login_code_checkapassword: "請輸入6-20位數字或字母組成的密碼",

                // <!--注册代码部分-- >
                lp_register_code_account_empty: "註冊賬號不能為空",
                lp_register_code_password_empty: "註冊密碼不能為空",
                lp_register_code_reppassword_empty: "重複密碼不能為空",
                lp_register_code_email_empty: "註冊郵箱不能為空",
                lp_register_code_checkaccount: "賬號只能是3-32位數字或字母（區分大小寫）開頭+數字字母的郵箱，\n及3-32位數字組成的手機號",
                lp_register_code_checkapassword: "請輸入6-20位數字或字母組成的密碼",
                lp_register_code_checkpwrep: "密碼與重複密碼不一致",
                lp_register_code_checkemail: "你輸入的郵箱格式不正確",
                lp_register_code_agreerule: "請勾選同意協議",

                // <!--找回密码代码部分-- >
                lp_getpassword_code_account_empty: "賬號不能為空",
                lp_getpassword_code_email_empty: "郵箱不能為空",
                lp_getpassword_code_account_fomat: "賬號只能是3-32位數字或字母（區分大小寫）開頭+數字字母的郵箱，\n及3-32位數字組成的手機號",
                lp_getpassword_code_email_fomat: "郵箱格式不正確",

                // < !--账号管理-- >
                lp_accountmanage_txt_return: "返  回",
                lp_accountmanage_txt_service: "聯繫客服",
                lp_account_manage_activity_update_psw: "修改密碼",
                lp_account_manage_activity_guest_binding: "試玩綁定",
                lp_account_manage_activity_facebook_binding: "Facebook賬號綁定",
                lp_account_manage_activity_google_binding: "G+賬號綁定",
                // < !--修改密码-- >
                lp_updatepassword_txt_updatepassword: "修改密碼",
                lp_updatepassword_txt_return: "返  回",
                lp_updatepassword_txt_account: "賬號",
                lp_updatepassword_txt_oldpassword: "原始密碼",
                lp_updatepassword_txt_newpassword: "新密碼",
                lp_updatepassword_txt_reppassword: "確認密碼",
                lp_updatepassword_btn_updatepassword: "確認修改",
                // < !--修改密码代码部分-- >
                lp_updatepassword_code_account_empty: "賬號不能為空",
                lp_updatepassword_code_account_format: "賬號只能是3-32位數字或字母（區分大小寫）開頭+數字字母的郵箱，\n及3-32位數字組成的手機號",
                lp_updatepassword_code_oldpasswod_empty: "原密碼不能為空",
                lp_updatepassword_code_password_format: "請輸入6-20位數字或字母組成的密碼",
                lp_updatepassword_code_newpassword_empty: "新密碼不能為空",
                lp_updatepassword_code_reppassword_empty: "確認密碼不能為空",
                lp_updatepassword_code_pwnoeqrepw_empty: "密碼與確認密碼不一致",
                // < !--绑定账号-- >
                lp_accountbing_txt_title: "試玩綁定",
                lp_accountbing_btn_accountbing: "確認綁定",
                lp_accountbing_edt_username: "賬號：手機號/Email",
                lp_accountbing_edt_password: "密 碼",
                lp_accountbing_edt_reppassword: "重複密碼",

                // < !--绑定账号代码部分-- >
                lp_accountbing_code_account_empty: "賬號不能為空",
                lp_accountbing_code_account_format: "賬號只能是3-32位數字或字母（區分大小寫）開頭+數字字母的郵箱，\n及3-32位數字組成的手機號",
                lp_accountbing_code_passwod_empty: "密碼不能為空",
                lp_accountbing_code_password_format: "請輸入6-20位數字或字母組成的密碼",
                lp_accountbing_code_email_empty: "郵箱不能為空",
                lp_accountbing_code_reppassword_empty: "確認密碼不能為空",
                lp_accountbing_code_pwnoeqrepw_empty: "密碼與確認密碼不一致",
                lp_accountbing_code_email_format: "郵箱格式不正確",
                lp_account_manage_activity_title: "賬號管理",
                lp_account_binding_activity_account_hint: "賬號：手機號/Email",
                lp_account_binding_activity_old_psw_hint: "原始密碼",
                lp_account_binding_activity_psw_hint: "密碼",
                lp_account_binding_activity_repsw_hint: "確認密碼",
                lp_account_binding_activity_guest: "試玩綁定",
                lp_account_binding_activity_facebook: "facebook綁定",
                lp_account_binding_activity_google: "google綁定",
                lp_account_binding_activity_up_psw: "修改密碼",
                lp_account_binding_activity_up_text: "確認修改",
                lp_account_binding_activity_bind_text: "確認綁定",
                lp_account_binding_activity_warn: "溫馨提示：您的賬號已經綁定",
                lp_account_binding_activity_email_hint: "Email（可用於找回密碼）",
                lp_account_binding_activity_email_confirm: "確定",
                lp_privacy_policy_activity_txt: "隱私政策",

                lp_pay_activity_pay_text1: "使用点数兑换",
                lp_pay_activity_pay_text2: "更多第三方支付",
                lp_pay_activity_cancel_pay: "取消支付",

                // < !--账号格式检查-- >
                lp_account_empty: "賬號或密碼不能為空",
                lp_password_empty: "賬號或密碼不能為空",
                lp_check_account: "賬號只能是3-32位數字或字母（區分大小寫）開頭+數字字母的郵箱，\n及3-32位數字組成的手機號",
                lp_check_password: "請輸入6-20位數字或字母組成的密碼",
                lp_check_password_mismatch: "密碼與重複密碼輸入不一致",
                lp_check_email: "您輸入的郵箱格式不正確"
        },
        KR: {
                //<!--로그인 화면-->
                lp_login_activity_text1: "로그인 방식 선택",
                lp_login_activity_cs_text: "고객 센터 연락",
                lp_login_activity_facebook_text: "facebook",
                lp_login_activity_sw_text: "게스트",
                lp_login_activity_pt_text: "회원 로그인",
                lp_login_activity_google_text: "google",
                lp_login_activity_xieding: "상업 협정",
                lp_login_activity_yinsi: "개인정보 정책",
                lp_login_activity_version: "버전",
                lp_login_activity_tip_title: "공지",
                lp_login_activity_but_enter: "로그인",
                //<!--계정 변경 화면-->
                lp_sdk_login_activity_tips_msg: "로그인 중",
                lp_sdk_login_activity_tips_switch_msg: "계정 변경",

                //<!--계정 로그인 화면-->
                lp_platform_login_activity_login_title: "계정 로그인",
                lp_platform_login_activity_retrieve_password_txt: "비밀번호를 잊으셨어요?",
                lp_platform_login_activity_btn_enter: "로그인",
                lp_platform_login_activity_register: "회원 가입하기",
                lp_platform_login_activity_account_manager: "계정 관리",
                lp_platform_login_activity_login_hint_password: "비밀번호",
                lp_platform_login_account_hint: "계정 (이메일/전화번호)",

                //<!-- 注册界面-->
                lp_register_activity_register_txt: "회원 가입",
                lp_register_activity_agree_rule: "회원 서비스 동의",
                lp_register_activity_rule_manage: "회원 관리 약관 ",
                lp_register_activity_register_but: "회원 가입",
                lp_register_activity_hint_username: "계정: 전화번호/Email",
                lp_register_activity_hint_password: "비밀번호",
                lp_register_activity_hint_reppassword: "비밀번호 확인",
                lp_register_activity_hint_email: "Email(비번 찾기에 사용)",

                //<!-- 비번 찾기 화면-->
                lp_retrieve_password_activity_title: "비밀번호를 잊으셨어요?",
                lp_retrieve_password_activity_hint_acc: "계정",
                lp_retrieve_password_activity_hint_email: "등록된 Email",
                lp_retrieve_password_activity_retrieve_pwd: "비번 찾기",

                //<!--회원 로그인 알림-->
                lp_login_code_account_empty: "계정은 비워 둘 수 없습니다",
                lp_login_code_password_empty: "비밀번호는 비워 둘 수 없습니다",
                lp_login_code_checkaccount: "3-32자의 숫자 혹은 영문(대소문자 구분)+숫자의 조합 사용 가능합니다.\n 3-32자의 숫자로 구성된 휴대폰 번호도 사용 가능합니다.",
                lp_login_code_checkapassword: "6-20자의 숫자 혹은 영문 조합의 비밀번호를 입력하십시오",

                //<!-- 회원 가입 코드 부분 -->
                lp_register_code_account_empty: "계정은 비워 둘 수 없습니다",
                lp_register_code_password_empty: "비밀번호는 비워 둘 수 없습니다",
                lp_register_code_reppassword_empty: "비밀번호는 비워 둘 수 없습니다",
                lp_register_code_email_empty: "이메일 비워 둘 수 없습니다",
                lp_register_code_checkaccount: "3-32자의 숫자 혹은 영문(대소문자 구분)+숫자의 조합 사용 가능합니다. \n3-32자의 숫자로 구성된 휴대폰 번호도 사용 가능합니다.",
                lp_register_code_checkapassword: "6-20자의 숫자 혹은 영문 조합의 비밀번호를 입력하십시오",
                lp_register_code_checkpwrep: "비밀번호 부일치",
                lp_register_code_checkemail: "입력하신 이메일 양식이 올바르지 않습니다",
                lp_register_code_agreerule: "협의에 동의해 주십시오.",

                //<!-- 비번 찾기 코드 부분 -->
                lp_getpassword_code_account_empty: "계정은 비워 둘 수 없습니다",
                lp_getpassword_code_email_empty: "이메일 비워 둘 수 없습니다",
                lp_getpassword_code_account_fomat: "3-32자의 숫자 혹은 영문(대소문자 구분)+숫자의 조합 사용 가능합니다.\n3-32자의 숫자로 구성된 휴대폰 번호도 사용 가능합니다.",
                lp_getpassword_code_email_fomat: "이메일 양식이 올바르지 않습니다",
                //<!-- 계정 관리 -->

                lp_accountmanage_txt_return: "돌아가기",
                lp_accountmanage_txt_service: "고객센터 연락하기",
                lp_account_manage_activity_update_psw: "비번 수정",
                lp_account_manage_activity_guest_binding: "계정 귀속",
                lp_account_manage_activity_facebook_binding: "Facebook계정 귀속",
                lp_account_manage_activity_google_binding: "G+계정 귀속",
                //<!-- 비번 수정 -->
                lp_updatepassword_txt_updatepassword: "비번 수정",
                lp_updatepassword_txt_return: "돌아가기",
                lp_updatepassword_txt_account: "계정",
                lp_updatepassword_txt_oldpassword: "원래 비번",
                lp_updatepassword_txt_newpassword: "새 비번",
                lp_updatepassword_txt_reppassword: "비번 확인",
                lp_updatepassword_btn_updatepassword: "수정 확인",
                //<!-- 비번 수정 코드 부분 -->
                lp_updatepassword_code_account_empty: "계정은 비워 둘 수 없습니다",
                lp_updatepassword_code_account_format: "3-32자의 숫자 혹은 영문(대소문자 구분)+숫자의 조합 사용 가능합니다.\n3-32자의 숫자로 구성된 휴대폰 번호도 사용 가능합니다.",
                lp_updatepassword_code_oldpasswod_empty: "원래 비번 비워 둘 수 없습니다",
                lp_updatepassword_code_password_format: "6-20자의 숫자 혹은 영문 조합의 비밀번호를 입력하십시오",
                lp_updatepassword_code_newpassword_empty: "새 비전 비워 둘 수 없습니다",
                lp_updatepassword_code_reppassword_empty: "비전 비워 둘 수 없습니다",
                lp_updatepassword_code_pwnoeqrepw_empty: "비밀번호 부일치",
                //<!-- 계정 귀속 -->
                lp_accountbing_txt_title: "게스트 귀속",
                lp_accountbing_btn_accountbing: "귀속 확인",
                lp_accountbing_edt_username: "계정: 전화번호/Email",
                lp_accountbing_edt_password: "비밀번호",
                lp_accountbing_edt_reppassword: "비밀번호 다시 입력",

                //<!-- 계정 귀속 코드 부분 -->
                lp_accountbing_code_account_empty: "계정은 비워 둘 수 없습니다",
                lp_accountbing_code_account_format: "3-32자의 숫자 혹은 영문(대소문자 구분)+숫자의 조합 사용 가능합니다. \n3-32자의 숫자로 구성된 휴대폰 번호도 사용 가능합니다.",
                lp_accountbing_code_passwod_empty: "비번 비워 둘 수 없습니다",
                lp_accountbing_code_password_format: "6-20자의 숫자 혹은 영문 조합의 비밀번호를 입력하십시오",
                lp_accountbing_code_email_empty: "이메일 비워 둘 수 없습니다",
                lp_accountbing_code_reppassword_empty: "비번 비워 둘 수 없습니다",
                lp_accountbing_code_pwnoeqrepw_empty: "비밀번호 부일치",
                lp_accountbing_code_email_format: "이메일 형식이 올바르지 않습니다",
                lp_account_manage_activity_title: "계정 관리",
                lp_account_binding_activity_account_hint: "계정: 휴대폰 번호/Email",
                lp_account_binding_activity_old_psw_hint: "원래 비번",
                lp_account_binding_activity_psw_hint: "비밀번호",
                lp_account_binding_activity_repsw_hint: "비밀번호 확인",
                lp_account_binding_activity_guest: "게스트 귀속",
                lp_account_binding_activity_facebook: "facebook귀속",
                lp_account_binding_activity_google: "google귀속",
                lp_account_binding_activity_up_psw: "비밀번호 수정",
                lp_account_binding_activity_up_text: "수정 확인",
                lp_account_binding_activity_bind_text: "귀속 확인",
                lp_account_binding_activity_warn: "알림: 계정 귀속되었습니다",
                lp_account_binding_activity_email_hint: "Email(비번 찾기에 사용 가능)",
                lp_account_binding_activity_email_confirm: "확인",
                lp_privacy_policy_activity_txt: "개인 정보 정책",

                lp_pay_activity_pay_text1: "포인트 교환",
                lp_pay_activity_pay_text2: "더 많은 결제 방식",
                lp_pay_activity_cancel_pay: "결제 취소",

                //<!--账号格式检查-->
                lp_account_empty: "계정은 비워 둘 수 없습니다",
                lp_password_empty: "비번 비워 둘 수 없습니다",
                lp_check_account: "3-32자의 숫자 혹은 영문(대소문자 구분)+숫자의 조합 사용 가능합니다. \n3-32자의 숫자로 구성된 휴대폰 번호도 사용 가능합니다.",
                lp_check_password: "6-20자의 숫자 혹은 영문 조합의 비밀번호를 입력하십시오",
                lp_check_password_mismatch: "비밀번호 부일치",
                lp_check_email: "이메일 형식이 올바르지 않습니다",

                //<!---->
                lp_tips_title: "알림",
                lp_tips_cancel: "취소",
                lp_tips_confirm: "확인",
                lp_login_switch_activity_del_msg: "이 로그인 기록 삭제하시겠습니까?",
                lp_permission_tips_setting_msg: "필요한 권한이 부족하여 취소를 클릭 후 설정으로 권한 허용해 주십시오",
                lp_permission_tips_cancel: "취소",
                lp_permission_tips_setting: "설정",
                lp_permission_tips_retry_msg: "필요한 권한이 부족",
                lp_permission_tips_msg: "이 애플리케이션을 제대로 사용할 수 있도록 저장 공간 권한 허용해 주십시오",
                lp_permission_tips_cancel_msg: "이 애플리케이션에 대한 저장 권한을 부여하지 않습니다,확인를 클릭 후 설정으로 권한 허용해 주십시오",
                lp_permission_cancel: "취소",
                lp_permission_retry: "재시도",
                lp_ping_tai_chu_zhi_activity_order_buy: "구매 확인",
                lp_ping_tai_chu_zhi_activity_order_msg: "주문 정보",
                lp_ping_tai_chu_zhi_activity_cs: "고객센터",
                lp_ping_tai_chu_zhi_activity_back: "돌아가기",
                lp_zhi_fu_item_btn_text: "구매하기",
                lp_network_error: "서버 연결 실패",

                lp_proxy_title: "개인정보",
                lp_proxy_back: "돌아가기",
                lp_privacy_policy_activity_title: "이용약관",
                lp_privacy_policy_title: "이용약관 및 개인 정보 취급방침 동의",
                lp_privacy_policy_activity_back: "돌아가기",
                lp_privacy_policy_activity_msg: "개인정보",
                lp_privacy_policy_activity_yyzc: "운영 정책",
                lp_privacy_policy_activity_review: "전체보기",
                lp_privacy_policy_activity_all_agree: "전체 동의 및 시작",
                lp_privacy_policy_activity_deny: "시작",
                lp_order_warn: "Placing order. Please try again later !",
                lp_issues_commit: "제출",
                lp_send_msg_error: "이미지 업로드 오류, 다시 제출하세요",
                lp_issues_empty: "문제를 설명해 주세요",
                lp_issues_type: "문제 유형을 선택하세요",
                lp_send_reply: "발송",
                lp_issues_content: "문제 내용"
        },
        English: {
                //<!--Login Interface-->
                lp_login_activity_text1: "Select way of login",
                lp_login_activity_cs_text: "Support",
                lp_login_activity_facebook_text: "facebook",
                lp_login_activity_sw_text: "Guest",
                lp_login_activity_pt_text: "Platform Login",
                lp_login_activity_google_text: "google",
                lp_login_activity_xieding: "Business agreements",
                lp_login_activity_yinsi: "Privacy policy",
                lp_login_activity_version: "Version",
                lp_login_activity_tip_title: "Notice",
                lp_login_activity_but_enter: "Start game",
                //<!--Account Switch Login Interface-->
                lp_sdk_login_activity_tips_msg: "Logging in",
                lp_sdk_login_activity_tips_switch_msg: "Switch Account",

                //<!--Account Login Interface-->
                lp_platform_login_activity_login_title: "Account Login",
                lp_platform_login_activity_retrieve_password_txt: "Forgot password?",
                lp_platform_login_activity_btn_enter: "Login",
                lp_platform_login_activity_register: "Click to sign up",
                lp_platform_login_activity_account_manager: "Account Management",
                lp_platform_login_activity_login_hint_password: "Password",
                lp_platform_login_account_hint: "Account(Email/PhoneNumber)",

                //<!-- Sign up Interface-->
                lp_register_activity_register_txt: "Account Register",
                lp_register_activity_agree_rule: "Agree Member Rule",
                lp_register_activity_rule_manage: "Member Rule",
                lp_register_activity_register_but: "Register",
                lp_register_activity_hint_username: "Account:Phone Number/Email",
                lp_register_activity_hint_password: "Password",
                lp_register_activity_hint_reppassword: "Repeat Password",
                lp_register_activity_hint_email: "Email(to find Password)",

                //<!-- Find password-->
                lp_retrieve_password_activity_title: "Forgot password?",
                lp_retrieve_password_activity_hint_acc: "Account",
                lp_retrieve_password_activity_hint_email: "Registered Email",
                lp_retrieve_password_activity_retrieve_pwd: "Find password",

                //<!--Platform Login Notice-->
                lp_login_code_account_empty: "Account can\'t be empty",
                lp_login_code_password_empty: "Password can\'t be empty",
                lp_login_code_checkaccount: "The account can only be a 3-32 digit or letter (case sensitive) beginning + alphanumeric mailbox, \nor 3-32 digit mobile phone number",
                lp_login_code_checkapassword: "Please enter a password of a combination of 6-20 digits or letters",

                //<!-- Sign up Code -->
                lp_register_code_account_empty: "Registered account cannot be empty",
                lp_register_code_password_empty: "Registration password cannot be empty",
                lp_register_code_reppassword_empty: "Repeat password cannot be empty",
                lp_register_code_email_empty: "Registered mailbox cannot be empty",
                lp_register_code_checkaccount: "The account can only be a 3-32 digit or letter (case sensitive) beginning + alphanumeric mailbox, \nor 3-32 digit mobile phone number",
                lp_register_code_checkapassword: "Please enter a password of a combination of 6-20 digits or letters",
                lp_register_code_checkpwrep: "Password is inconsistent with repeat password",
                lp_register_code_checkemail: "The mailbox you entered is not in the correct format",
                lp_register_code_agreerule: "Please tick the agreement",

                //<!-- Find Password Code -->
                lp_getpassword_code_account_empty: "Account cannot be empty",
                lp_getpassword_code_email_empty: "EMail cannot be empty",
                lp_getpassword_code_account_fomat: "The account can only be a 3-32 digit or letter (case sensitive) beginning + alphanumeric mailbox, \nor 3-32 digit mobile phone number",
                lp_getpassword_code_email_fomat: "The Email format is incorrect",
                //<!-- Account Management -->

                lp_accountmanage_txt_return: "Back",
                lp_accountmanage_txt_service: "Support",
                lp_account_manage_activity_update_psw: "Change Password",
                lp_account_manage_activity_guest_binding: "Guest Binding",
                lp_account_manage_activity_facebook_binding: "Facebook Account Binding",
                lp_account_manage_activity_google_binding: "G+ Account Binding",
                //<!-- Change Password-->
                lp_updatepassword_txt_updatepassword: "Change Password",
                lp_updatepassword_txt_return: "Back",
                lp_updatepassword_txt_account: "Account",
                lp_updatepassword_txt_oldpassword: "Current Password",
                lp_updatepassword_txt_newpassword: "New Password",
                lp_updatepassword_txt_reppassword: "Repeat New Password",
                lp_updatepassword_btn_updatepassword: "Confirm",
                //<!-- Change Password Code -->
                lp_updatepassword_code_account_empty: "Account cannot be empty",
                lp_updatepassword_code_account_format: "The account can only be a 3-32 digit or letter (case sensitive) beginning + alphanumeric mailbox,\nor 3-32 digit mobile phone number",
                lp_updatepassword_code_oldpasswod_empty: "Current Password cannot be empty",
                lp_updatepassword_code_password_format: "Please enter a password of a combination of 6-20 digits or letters",
                lp_updatepassword_code_newpassword_empty: "New Password cannot be empty",
                lp_updatepassword_code_reppassword_empty: "Repeat Password cannot be empty",
                lp_updatepassword_code_pwnoeqrepw_empty: "",
                //<!-- Binding Account -->
                lp_accountbing_txt_title: "Guest Binding",
                lp_accountbing_btn_accountbing: "Confirm to bind",
                lp_accountbing_edt_username: "Account: Phone Number/Email",
                lp_accountbing_edt_password: "Password",
                lp_accountbing_edt_reppassword: "Repeat Password",

                //<!-- Binding Account Code -->
                lp_accountbing_code_account_empty: "Account cannot be empty",
                lp_accountbing_code_account_format: "The account can only be a 3-32 digit or letter (case sensitive) beginning + alphanumeric mailbox,\nor 3-32 digit mobile phone number",
                lp_accountbing_code_passwod_empty: "Password cannot be empty",
                lp_accountbing_code_password_format: "Please enter a password of a combination of 6-20 digits or letters",
                lp_accountbing_code_email_empty: "EMail cannot be empty",
                lp_accountbing_code_reppassword_empty: "Repeat Password cannot be empty",
                lp_accountbing_code_pwnoeqrepw_empty: "The password is inconsistent with the repeat password",
                lp_accountbing_code_email_format: "The Email format is incorrect.",
                lp_account_manage_activity_title: "Account Management",
                lp_account_binding_activity_account_hint: "Account: Phone Number/Email",
                lp_account_binding_activity_old_psw_hint: "Origin Password",
                lp_account_binding_activity_psw_hint: "Password",
                lp_account_binding_activity_repsw_hint: "Repeat Password",
                lp_account_binding_activity_guest: "Guest Binding",
                lp_account_binding_activity_facebook: "Facebook Binding",
                lp_account_binding_activity_google: "google Binding",
                lp_account_binding_activity_up_psw: "Change Password",
                lp_account_binding_activity_up_text: "Confirm to change",
                lp_account_binding_activity_bind_text: "Confirm to bind",
                lp_account_binding_activity_warn: "Tips: Your account has already bound",
                lp_account_binding_activity_email_hint: "Email(to find password)",
                lp_account_binding_activity_email_confirm: "Confirm",
                lp_privacy_policy_activity_txt: "Privacy Policy",

                lp_pay_activity_pay_text1: "User Points to purchase",
                lp_pay_activity_pay_text2: "More Third Party payment",
                lp_pay_activity_cancel_pay: "Cancle payment",

                //<!--Account Format Check-->
                lp_account_empty: "Account cannot be empty",
                lp_password_empty: "Password cannot be empty",
                lp_check_account: "The account can only be a 3-32 digit or letter (case sensitive) beginning + alphanumeric mailbox,\nor 3-32 digit mobile phone number",
                lp_check_password: "Please enter a password of a combination of 6-20 digits or letters",
                lp_check_password_mismatch: "Password is inconsistent with repeat password",
                lp_check_email: "The Email you entered is not in the correct format",

                lp_tips_title: "Notice",
                lp_tips_cancel: "Cancle",
                lp_tips_confirm: "Confirm",
                lp_login_switch_activity_del_msg: "Delete this login record?",
                lp_permission_tips_setting_msg: "Missing necessary permissions Click Cancel to exit, click Settings to unlock permissions",
                lp_permission_tips_cancel: "Cancle",
                lp_permission_tips_setting: "Settings",
                lp_permission_tips_retry_msg: "Missing necessary permissions to run",
                lp_permission_tips_msg: "In order to use this app properly, please allow storage permissions",
                lp_permission_tips_cancel_msg: "Did not authorize this app storage permission, click Confirm to exit the game, click Settings to open the permission",
                lp_permission_cancel: "Cancle",
                lp_permission_retry: "Retry",
                lp_ping_tai_chu_zhi_activity_order_buy: "Confirm to purchase",
                lp_ping_tai_chu_zhi_activity_order_msg: "Order Information",
                lp_ping_tai_chu_zhi_activity_cs: "Support",
                lp_ping_tai_chu_zhi_activity_back: "Back",
                lp_zhi_fu_item_btn_text: "purchase",
                lp_network_error: "Connection failure",
                //<!--paypal-- >
                lp_paypal_tel: "Please enter Phone Number",
                lp_paypal_email: "Please enter Email",
                lp_pay_complete: "Purchase complete",

                lp_quit_game: "Are you sure you want to quit the game?",
                lp_pay_miss_order: "Unfinished order founded \nhas been processed automatically.",
                lp_order_warn: "Placing order. Please try again later !"
        }
};
var AllLanguage = {
        //台湾
        TW_Language: {
                officialPay: "官方平台支付",
                otherPay: "第三方支付",
                account: "帳號",
                point: "餘額",
                insufficientTip: "(你的L点不足，请先充值L点)",
                exchange: "兌換",
                get_Point: "購  買",
                buyPoint: "購買點數",
                username: "用戶名",
                codeNum: "卡號",
                codePass: "卡密",
                codeDes: "請輸入點數卡號",
                codePassDes: "請輸入密碼",
                point_pt: "平台點",
                L_Point: "L點"
        }
}